const { mongoClien } = require('mongodb');
const MongoClient = require('mongodb/lib/mongo_client');
const ObjectId = require('mongodb').ObjectId

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'suntree';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi gagal!');
    }
    // console.log('Koneksi berhasil!')

    // * pilih database
    const db = client.db(dbName);

    // * Menambahkan 1 data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: "Andi",
    //         email: "andi@gmail.com"
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Gagal menambahkan data!');
    //         }

    //         console.log(result);
    //     }
    // );

    // * Menambahkan lebih dari 1 data ke collection mahasiswa
    // db.collection('mahasiswa').insertMany([
    //     {
    //         nama: "Anda",
    //         email: "anda@gmail.com"
    //     },
    //     {
    //         nama: "Ando",
    //         email: "ando@gmail.com"
    //     }
    // ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Gagal menambahkan data!');
    //         }

    //         console.log(result);
    //     }
    // );

    // * Menampilkan semua data yang ada di collention 'mahasiswa'
    // db
    //     .collection('mahasiswa')
    //     .find()
    //     .toArray((error, result) => {
    //         console.log(result)
    //     });

    // * Menampilkan data berdasarkan kriteria yang ada di collention 'mahasiswa'
    // db
    //     .collection('mahasiswa')
    //     .find({ _id: ObjectId('61fe234a5899f674a45ea197') })
    //     .toArray((error, result) => {
    //         console.log(result)
    //     });

    // * Mengubah 1 data berdasarkan kriteria yang ada di collention 'mahasiswa'
    // const updatePromise = db
    //     .collection('mahasiswa')
    //     .updateOne(
    //         { _id: ObjectId('61fe234a5899f674a45ea197') },
    //         { $set: { nama: 'Andi Jaya' }}
    //     );

    // ? Menampilkan info update dengan variable terpisah (bisa dengan chaining)
    // updatePromise
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // * Mengubah data lebih dari 1 berdasarkan kriteria
    // const updatePromise = db
    //     .collection('mahasiswa')
    //     .updateMany(
    //         { nama: "Ando" },
    //         { $set: { nama: 'Ando Jaya' }}
    //     );

    // * Menghapus 1 data berdasarkan kriteria yang ada di collention 'mahasiswa'
    // db
    //     .collection('mahasiswa')
    //     .deleteOne(
    //         { _id: ObjectId('61fe234a5899f674a45ea197') },
    //     ).then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         console.log(error);
    //     });

    // * Menghapus data lebih dari 1 berdasarkan kriteria
    // db
    //     .collection('mahasiswa')
    //     .deleteMany(
    //         { nama: 'Iwan' },
    //     ).then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         console.log(error);
    //     });

});