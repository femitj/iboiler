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
});