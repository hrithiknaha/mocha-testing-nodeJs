var dba = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if email already exists
  dba.saveUser({email, password});
  // Send the welcome email
};
