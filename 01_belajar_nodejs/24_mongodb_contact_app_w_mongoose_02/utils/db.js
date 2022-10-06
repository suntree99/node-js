const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/suntree', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// * Menambah 1 data
// const contact1 = new Contact({
//     nama: 'Iwan Setiawan',
//     nohp: '0812345890',
//     email: 'iwansetiawan@gmail.com',
// });

// * Simpan ke Collection
// contact1.save().then((contact) => {
//     console.log(contact)
// });