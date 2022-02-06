// console.log(window); // muncul object window
// console.log(window.alert('Hello World')); // muncul alert 'Hello World'

function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}; // function cetakNama ditempatkan di object window

console.log(window.cetakNama('Budi')); // window merupakan object global