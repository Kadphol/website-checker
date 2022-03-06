const express = require("express"),
  uploadRoute = express.Router(),
  upload = require('./upload'),
  fs = require('fs'),
  request = require('request');

function getStatus(url) {
  return new Promise((resolve, reject) => {
    request(url, function(error, response, body) {
      resolve({site: url, status: (!error && response.statusCode) ? "Up": "Down"});
    });
  });
};

function readFile(path) {
  const raw = fs.readFileSync(path, 'utf8');
  const data = raw.split(/\r?\n/);
  return data;
}

uploadRoute.route("/").post(upload.single("file"), (req, res, next) => {
  if(req.file) {
    const data = readFile(req.file.path);
    let promiseList = data.map(url => getStatus(url));
    Promise.all(promiseList).then(resultList => {
      return res.json(resultList);
    });
  } else {
    return res.statusCode(500).send("File not found");
  }
  
});

module.exports = {
  uploadRoute,
  getStatus: getStatus,
  readFile: readFile
}