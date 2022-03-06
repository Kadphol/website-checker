const express = require("express"),
  cors = require("cors"),
  createError = require('http-errors'),
  os = require('os'),
  cluster = require('cluster');

const clusterWorkSize = os.cpus().length;
const port = process.env.PORT || 8080;

if(clusterWorkSize > 1) {
  if(cluster.isMaster) {
    for (let i=0; i < clusterWorkSize; i++) {
      cluster.fork()
    }

    cluster.on("exit", function(worker) {
      console.log("Worker", worker.id, " has exitted.")
    });
  } else {
    const app = express();
    app.use(express.json({ extended: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(express.static(__dirname));
    const server = app.listen(port, () => {});

      const uploadRoute = require("./uploadRoute");
    app.use("/upload", uploadRoute);
    app.use((req, res, next) => {
      next(createError(404));
    });

    app.use((err, req, res, next) => {
      console.error(err.message);
      if(!err.statusCode) err.statusCode = 500;
      res.status(err.statusCode).send(err.message);
    });
  }
} else {
  const app = express();
  app.use(express.json({ extended: true }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.static(__dirname));

  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  const uploadRoute = require("./uploadRoute");
  app.use("/upload", uploadRoute);
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use((err, req, res, next) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
}


