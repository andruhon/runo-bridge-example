os = require('os');
addon = require('./build/Release/addon');

console.log(os.EOL+"int_in_int_out:");
console.log(addon.int_in_int_out(2));

console.log(os.EOL+"is_greather_than_42(50):");
console.log(addon.is_greather_than_42(50));

console.log(os.EOL+"is_greather_than_42(5):");
console.log(addon.is_greather_than_42(5));

console.log(os.EOL+"get_42(true):");
console.log(addon.get_42(true));

console.log(os.EOL+"get_42(false):");
console.log(addon.get_42(false));
