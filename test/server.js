import express from 'express';
import chai from 'chai';
import server from '../lib/server.js';


chai.use(require('chai-http'));
let should = chai.should();

describe('Example Node Server', () => {
    describe('GET /tasks', function() {
        it('returns a object message', function(done) {
          chai.request(server)
            .get('/api/v1')
            .end(function(err, res){
              res.should.have.status(200);
              done();
            });
        });
    });


describe('POST /record', function() {
    it('saves a new record', function(done) {
        chai.request(server)
            .post('/api/v1/red-flags')
            .send({
                type: 'red-flag',
                location: 'ikeja',
                comment: 'this is a comment'
            })
            .end(function(err, res) {
              res.should.have.status(201);  
              done(err);
            });
      });
  });
});