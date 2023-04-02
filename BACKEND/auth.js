const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const router = express.Router();
require("./Conn");
app.use(express.urlencoded({ extended: false }));
const User = require("./userSchema");
const multer = require("multer");


function generateOTP() {
  var otp = "";
  var otpLength = 2;
  var characters = "0123456789";
  for (var i = 0; i < otpLength; i++) {
    otp += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return otp;
}

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb("not created", './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname);
  },
});
const upload = multer({ storage:storage });

router.post('/upload', upload.single("File"),  (req, res,next) => {
  const { Namee, Location, Description } = req.body;
  const like=generateOTP()
  const fulldate=`${date.getDate()} ${month[date.getMonth()]} ${date.getUTCFullYear()}`
  const file=req.file
  if (!Namee|| !Location || !Description) {
    res.status(422).json({ error: "empty field from console" });
    return console.log("empty field");
  }
  const user = new User({
    file,
    Namee,
    Location,
    Description,
    like,
    fulldate,
  });

  user.save();

  res.status(201).json({ message: "user registered successfully" });
  console.log("user registered successfully");
});



router.get("/postview", async (req, res) => {
  try {
    await User.find({}).then((data) => {
      res.send({ status: "Ok", data: data });
    });
  } catch (error) {
    res.send({ status: "Cant get Data" });
  }
});

module.exports = router;
