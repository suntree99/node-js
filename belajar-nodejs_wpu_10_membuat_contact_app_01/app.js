const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama anda : ');
    const email = await contacts.tulisPertanyaan('Masukkan email anda : ');
    const noHP = await contacts.tulisPertanyaan('Masukkan no. HP anda : ');

    contacts.simpanContact(nama, email, noHP);
};

// * Penulisan dengan destructuring
// const { tulisPertanyaan, simpanContact } = require('./contacts'); // destructuring
// const main = async () => {
    // const nama = await tulisPertanyaan('Masukkan nama anda : ');
    // const email = await tulisPertanyaan('Masukkan email anda : ');
    // const noHP = await tulisPertanyaan('Masukkan no. HP anda : ');
    // simpanContact(nama, email, noHP);
// };

main();