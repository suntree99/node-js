// console.log('Hello World'); // jalankan di terminal dengan sintaks : 'node coba.js' atau 'node coba'

function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Budi',
    umur : 32,
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun`
    }
};

class Orang {
    constructor() {
        console.log('object orang telah dibuat');
    }
}

// * Cara satu per satu
// module.exports.cetakNama = cetakNama; // mengirim function cetakNama agar bida digunakan di file yang me-require
// module.exports.PI = PI; // mengirim variable PI  agar bida digunakan di file yang me-require
// module.exports.mahasiswa = mahasiswa; // mengirim object mahasiswa agar bida digunakan di file yang me-require
// module.exports.Orang = Orang; // mengirim class Orang agar bida digunakan di file yang me-require

// * Cara satu export
// module.exports = {
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     Orang : Orang
// }

// * Cara satu export ES6 (jika nama property dan valuenya sama)
module.exports = { cetakNama, PI, mahasiswa, Orang }