const expect = require("expect");

const utils = require("./utils");

it('should add two numbers', function(){
    var res = utils.add(33,11);
    expect(res).toBe(44);
})

it('should square the number', function(){
    var res = utils.square(9);
    expect(res).toBe(81);
})

it('should squatre the number ascynchronously', function(done){
    utils.aSyncSquare(9, function(square){
        expect(square).toBe(81);
        done();
    });
})

it('should include the name', function(){
    var res = utils.nameInclude({
        Address : "Newtown",
        Age : 20
    },'Hrithik Naha')

    expect(res).toInclude({
        firstName: "Hrithik",
        lastName: "Naha"
    })
})