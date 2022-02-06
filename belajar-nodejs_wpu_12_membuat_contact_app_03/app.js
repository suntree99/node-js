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

// ? menambahkan contact baru
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
.demandCommand();

// ? menampilkan daftar semua na dan nomor HP contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan no HP contact',
    handler(argv) {
        contacts.listContact();
    }
});

// ? menampilkan detail contact berdasarkan nama
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
});

// ? menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
});

yargs.parse();