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

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8'); // masih dalam bentuk string
    const contacts = JSON.parse(file); // mengubah kedalam bentuk string
    return contacts;
}

// menyimpan kontak
const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };
    // const file = fs.readFileSync('data/contacts.json', 'utf-8'); // masih dalam bentuk string
    // const contacts = JSON.parse(file); // mengubah kedalam bentuk string
    const contacts = loadContact();

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
};

// menampilkan daftar semua na dan nomor HP contact 
const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak : '));
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.nama} - ${contact.noHP}`)
    });
};

// menampilkan detail contact berdasarkan nama
const detailContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase() );
    if (!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    }
    
    console.log(chalk.cyan.inverse.bold(contact.nama));
    console.log(contact.noHP);
    if (contact.email) {
        console.log(contact.email);
    };
};

// menghapus contact berdasarkan nama
const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase() );
    if (contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    }
    
    const dataPath = './data/contacts.json';
    fs.writeFileSync(dataPath, JSON.stringify(newContacts), 'utf-8');
    console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus.`));
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };