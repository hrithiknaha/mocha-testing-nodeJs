function add(a,b){
    return a+b;
}

function square(a){
    return a*a;
}

function nameInclude(user, fullName){
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

module.exports = {
    add,
    square,
    nameInclude
}