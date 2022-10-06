const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('budi@gmail.com')); // true
// console.log(validator.isEmail('budi@gmail.co')); // true
// console.log(validator.isEmail('budi@gmail.c')); // false

// console.log(validator.isMobilePhone('0812345678', 'id-ID')); // true
// console.log(validator.isMobilePhone('0802345678', 'id-ID')); // false
// console.log(validator.isMobilePhone('0712345678', 'id-ID')); // false

// console.log(validator.isNumeric('0712345678')); // true
// console.log(validator.isNumeric('0712345678a')); // false

// console.log(chalk.Blue('Hello World!'));
// console.log(chalk.bgBlue('Hello World!'));
// console.log(chalk.black.bgBlue('Hello World!'));

// console.log(chalk.italic.black.bgBlue('Hello World!'));
// const pesan = "Hello World";
// console.log(chalk.bgRed.black(pesan));
const nama = 'Budi';
const pesan = chalk`Lorem ipsum dolor, {bgRed.black.bold sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Nama Saya : ${nama}`;
console.log(pesan);