function add(a,b){
    return a+b;
}

function square(a){
    return a*a;
}

function aSyncSquare(a, callback){
    setTimeout(function(){
        callback(a*a)
    }, 1000);
};

function nameInclude(user, fullName){
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

module.exports = {
    add,
    square,
    nameInclude,
    aSyncSquare
}