const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    contacts.push(contact); // menambahkan data input ke dalam json
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); // menuliskan ke dalam file
    
    console.log('Terima kasih sudah memasukkan data.');
    rl.close();
}

module.exports = { tulisPertanyaan, simpanContact };