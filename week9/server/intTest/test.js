var assert = require('assert');
var app = require('../server.js');

let chai = require('chai');
let chaiHTTP = require('chai-http');
let should = chai.should();
chai.use(chaiHTTP);

describe('Integration Testing', function () {
    before(function () {
        console.log("Time to Test");
    });

    after(function () {
        console.log("All done");
    });

    describe('/api/read', ()=>{
        it('it should return a bunch of data', (done)=>{
            chai.request(app).post('/api/read').end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });
});