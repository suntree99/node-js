const fs = require('fs');

// console.log(fs);

// ? MENULIS

// * Menuliskan string ke file (Synchronous)
// fs.writeFileSync('test.txt', 'Hello World secara synchronous!');

// * Menampung error dengan try catch
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!');
// } catch(e) {
//     console.log(e); // jika folder test belum
// }

// * Menuliskan string ke file (Asynchronous)
// fs.writeFile('data/test.txt', 'Hello World secara Asynchronous!', (e) => {
//     console.log(e);
// });

// ? MEMBACA

// * Membaca file (Synchronous)
// const data = fs.readFileSync('test.txt');
// console.log(data.toString());

// const data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data);

// * Membaca file (Asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (e, data) => {
//     if (e) throw e;
//     console.log(data);
// });

// ? READLINE
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Masukkan nama anda : ', (nama) => {
//     rl.question('Masukkan no. Hp anda : ', (noHp) => {
//         console.log(`Terima kasih ${nama}, telah menginputkan ${noHp}`);
//         rl.close();
//     });
// });

// * readline + writeFile
rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no. Hp anda : ', (noHp) => {
        const contact = { nama, noHp };
        const file = fs.readFileSync('data/contacts.json', 'utf-8'); // masih dalam bentuk string
        const contacts = JSON.parse(file); // mengubah kedalam bentuk string
        contacts.push(contact); // menambahkan data input ke dalam json
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); // menuliskan ke dalam file
        
        console.log('Terima kasih sudah memasukkan data.');

        rl.close();
    });
});