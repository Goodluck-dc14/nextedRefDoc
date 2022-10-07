const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "keza-africa",
  api_key: "863552352767589",
  api_secret: "ab576x2kZw-iwLIAKZAJoxWwhkQ",
  secure: true,
});

module.exports = cloudinary;
