const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
};

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
};

// memproses input
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (value) => {
            resolve(value);
        });
    });
};

// menyimpan kontak
const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };
    const file = fs.readFileSync('data/contacts.json', 'utf-8'); // masih dalam bentuk string
    const contacts = JSON.parse(file); // mengubah kedalam bentuk string

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
        return false;
    }

    // cek email
    if(email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email tidak valid!'));
            return false;
        }
    }

    // cek no HP
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid!'));
        return false;
    }

    contacts.push(contact); // menambahkan data input ke dalam json
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); // menuliskan ke dalam file
    
    console.log(chalk.green.inverse.bold('Terima kasih sudah memasukkan data.'));
}

module.exports = { simpanContact };