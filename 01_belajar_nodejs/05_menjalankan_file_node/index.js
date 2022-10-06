// console.log('Hello Suntree'); // jalankan di terminal dengan sintaks : 'node index.js' atau 'node index' atau 'node .' (karena file utama)

// const nama = 'Budi Darmawan';
// console.log(nama); // Budi Darmawan

// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama('Budi Darmawan')); // Hi, nama saya Budi Darmawan

// console.log(window); // ReferenceError: window is not defined

// require('./coba') // memanggil file coba.js, bisa juga ditulis coba.js
// console.log('Hello Suntree');

const cetakNama = require('./coba') // untuk menangkap hasil export
console.log(cetakNama('Budi')); // ReferenceError: cetakNama is not defined
// di node js penggunaan 'require' menganut sistem modul, require hanya mengeksekusi sintaks searah
// untuk menggunakan function pada file require, function harus di-export dan ditangkap dengan dimasukkan kedalam variable
