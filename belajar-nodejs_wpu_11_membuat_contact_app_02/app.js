const yargs = require('yargs');
const contacts = require('./contacts');

// * mengabil argument dari command line
// console.log(process.argv[2]);
// const command = process.argv[2];
// if (command === 'add') {
// } else if (command === 'remove') {
// } else if (command === 'list') 
// }

// * menggunakan package yargs
// console.log(yargs.argv);

// yargs.command('add', 'Menambahkan contact baru', () => {}, (argv) => {
//     console.log(argv.nama);
// });

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     noHP: argv.noHP
        // };
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    }
})

yargs.parse();