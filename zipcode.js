var zipcode = require('zipcode');
var state = new Array();
// returns data in [city, state] format
state = zipcode.lookup('74133'); // ['SAN FRANCISCO','CA']
console.log(state);