const chai = require('chai'),
  chaiHttp = require('chai-http'),
  should = chai.should();

const PORT = process.env.PORT || 8080;
const APP_URL = 'http://localhost:' + PORT;
chai.use(chaiHttp);

describe('Servers test', function() {
  before(function() {
    require('../src/server')(process.cwd(), app => {
      app.listen(PORT, err => {
        console.log(err || 'Server running on ', PORT,
          ' Process ID: ' + process.pid);
      });
    });
  });

  it('upload route success', function(done) {
    chai.request(APP_URL)
      .post('/upload')
      .attach('file', __dirname + "/upload/site.csv")
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.length(8);
        done();
      });
  });

  it('upload route wrong type of file', function(done) {
    chai.request(APP_URL)
      .post('/upload')
      .attach('file', __dirname + "/upload/test.txt")
      .end(function(err, res) {
        res.should.have.status(500);
        done();
      });
  });

  it('upload route no file', function(done) {
    chai.request(APP_URL)
      .post('/upload')
      .end(function(err, res) {
        res.should.have.status(500);
        done();
      });
  });
});