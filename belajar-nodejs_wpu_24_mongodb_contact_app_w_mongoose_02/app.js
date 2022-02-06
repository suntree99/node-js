const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, validationResult, check } = require('express-validator');
const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// Setup Method Override
app.use(methodOverride('_method'));

// Setup EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Konfigurasi Flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Halaman HOME
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Budi Darmawan',
            email: 'budidarmawan@gmail.com'
        },
        {
            nama: 'Iwan Setiawan',
            email: 'iwansetiawan@gmail.com'
        },
        {
            nama: 'Wati Supriati',
            email: 'watisupriati@gmail.com'
        }
    ];
    res.render('index', { 
        nama: 'Budi Darmawan',
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout'
    })
});

// Halaman About
app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'Halaman About',
        layout: 'layouts/main-layout'
    })
});

// Halaman Contact
app.get('/contact', async (req, res) => {
    // Contact.find().then((contact) => {
        //     res.send(contact);
        // });
        
        const contacts = await Contact.find();
        
        res.render('contact', { 
            title: 'Halaman Detail',
            layout: 'layouts/main-layout',
            contacts,
            msg: req.flash('msg')
        });
    });
    
    // Halaman Form Tambah Data Contact
    app.get('/contact/add', (req, res) => {
        res.render('add-contact', {
            title: 'Form Tambah Data Contact',
            layout: 'layouts/main-layout',
        })
    });
    
    // Proses Tambah Data Contact
    app.post('/contact', [
        body('nama').custom(async (value) => {
            const duplikat = await Contact.findOne({nama: value});
            if(duplikat) {
                throw new Error('Nama contact sudah digunakan!')
            }
        return true;
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'Nomor HP tidak valid').isMobilePhone('id-ID')
],
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.render('add-contact', {
            title: 'Form Tambah Data Contact',
            layout: 'layouts/main-layout',
            errors: errors.array(),
        })
    } else {
        Contact.insertMany(req.body, (error, result) => {
            // kirimkan flash message
            req.flash('msg', 'Data contact berhasil ditambahkan!');
            res.redirect('/contact');
        });
    }
});

// Halaman Detail Contact
app.get('/contact/:nama', async (req, res) => {
    const contact = await Contact.findOne({nama: req.params.nama});
    
    res.render('detail', { 
        title: 'Halaman Contact',
        layout: 'layouts/main-layout',
        contact
    })
});

// * Proses Delete Contact
// app.get('/contact/delete/:nama', async (req, res) => {
//     const contact = await Contact.findOne({nama: req.params.nama});
    
//     if(!contact) {
//         res.status(404);
//         res.send('<h1>404</h1>');
//     } else {
//         Contact.deleteOne({_id: contact._id}).then((result) => {
//             req.flash('msg', 'Data contact berhasil dihapus!');
//             res.redirect('/contact');        
//         });
//     }
// });
app.delete('/contact', (req, res) => {
    Contact.deleteOne({nama: req.body.nama}).then((result) => {
    req.flash('msg', 'Data contact berhasil dihapus!');
    res.redirect('/contact');        
    });
});

// Halaman Form Ubah Data Contact
app.get('/contact/edit/:nama', async (req, res) => {
    const contact = await Contact.findOne({nama: req.params.nama});
    console.log(contact);

    res.render('edit-contact', {
        title: 'Form Ubah Data Contact',
        layout: 'layouts/main-layout',
        contact
    })
});

// Proses Ubah Data Contact
app.put('/contact', [
    body('nama').custom(async (value, {req}) => {
        const duplikat = await Contact.findOne({nama: value});
        if(value !== req.body.oldNama && duplikat) {
            throw new Error('Nama contact sudah digunakan!')
        }
        return true;
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'Nomor HP tidak valid').isMobilePhone('id-ID')
],
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.render('edit-contact', {
            title: 'Form Tambah Data Contact',
            layout: 'layouts/main-layout',
            errors: errors.array(),
            contact: req.body
        })
    } else {
        Contact.updateOne(
            {_id: req.body._id},
            {
                $set: {
                    nama: req.body.nama,
                    email: req.body.email,
                    nohp: req.body.nohp,
                }
            }
        ).then((result) => {
            // kirimkan flash message
            req.flash('msg', 'Data contact berhasil diubah!');
            res.redirect('/contact');
        });
    }
});


app.listen(port, () => {
    console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});