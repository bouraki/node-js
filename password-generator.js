var generator = require('generate-password');


const pass = generator.generateMultiple(4,{length:10})


console.log(pass)