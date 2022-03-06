const express = require("express"),
  cors = require("cors"),
  createError = require('http-errors'),
  os = require('os');

const ENV = process.env.NODE_ENV || 'development';
const app = express();

module.exports = (appdir, cb) => {
  app.dir = appdir;

  // static files
  app.use(express.static(app.dir + '/public'));

  // things to do on each request
  app.use((req, res, next) => {
    // log each request in development/staging ENVironment
    if (ENV !== 'production') {
      let now = new Date();
      console.log(`${now.getHours()}:${now.getMinutes()}`, req.method, req.url,
        req.socket.bytesRead, 'process:', process.pid);
    }
    next();
  });

  app.use(express.json({ extended: true }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.static(app.dir + '/public'));

  const { uploadRoute } = require("./uploadRoute");
  app.use("/upload", uploadRoute);
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use((err, req, res, next) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });

  cb(app);
};

