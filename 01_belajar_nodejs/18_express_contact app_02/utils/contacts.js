const fs = require('fs');

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

// ambil semua data di contacts.json
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8'); // masih dalam bentuk string
    const contacts = JSON.parse(file); // mengubah kedalam bentuk string
    return contacts;
}

// cari contact berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase() );
    return contact;
}

// menuliskan / menimpa file contacts.json dengan data yang baru
const saveContacts = (newContacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
};

// menambahkan data contact baru
const addContact = (newContact) => {
    const contacts = loadContact();
    contacts.push(newContact);
    saveContacts(contacts);
};

// cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact();
    return contacts.find((contact) => contact.nama === nama);
};

module.exports =  { loadContact, findContact, addContact, cekDuplikat };