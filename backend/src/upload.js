const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname+"/upload");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilters = (req, file, cb) => {
  if((file.mimetype).includes("csv")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


const upload = multer({ storage: storage, fileFilter: fileFilters });

module.exports = upload;