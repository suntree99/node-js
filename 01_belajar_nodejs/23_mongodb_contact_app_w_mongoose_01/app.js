const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});

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
})

// Halaman About
app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'Halaman About',
        layout: 'layouts/main-layout'
    })
})

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

// Halaman Detail Contact
app.get('/contact/:nama', async (req, res) => {
    const contact = await Contact.findOne({nama: req.params.nama});

    res.render('detail', { 
        title: 'Halaman Contact',
        layout: 'layouts/main-layout',
        contact
    })
})