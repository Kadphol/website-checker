const express = require("express"),
  router = express.Router(),
  upload = require('./upload'),
  fs = require('fs'),
  request = require('request');

function getStatus(url) {
  return new Promise((resolve, reject) => {
    request(url, function(error, response, body) {
      resolve({site: url, status: (!error && response.statusCode) ? "Up": "Down"});
    });
  });
}

router.route("/").post(upload.single("file"), (req, res, next) => {
  const raw = fs.readFileSync(req.file.path, 'utf8');
  const data = raw.split(/\r?\n/);
  let promiseList = data.map(url => getStatus(url));
  Promise.all(promiseList).then(resultList => {
    return res.json(resultList);
  });
});

module.exports = router;