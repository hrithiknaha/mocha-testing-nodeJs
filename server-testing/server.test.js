const request = require('supertest');
const expect = require('expect');



var app = require('./server').app;

describe('http tests', function(){
    it('should return hello world response', function (done){
        request(app)
            .get('/')
            .expect(404)
            .expect(function (res){
                expect(res.body).toInclude({
                    error: "Page not found."
                })
            })
            .end(done);
    })
    
    it('it should return my user fucnction', function (done){
        request(app)
            .get('/users')
            .expect(200)
            .expect(function (res){
                expect(res.body).toInclude({
                    name : 'Hrithik Naha',
                    age : 20
                })
            })
            .end(done);
    })
})

