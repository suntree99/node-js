const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');
const app = express()
const port = 3000

app.set('view engine', 'ejs'); // gunakan ejs
app.use(expressLayout); // Third-party middleware
app.use(express.static('public')); // Built-in middleware

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

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'Halaman About',
        layout: 'layouts/main-layout'
    })
})

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', { 
        title: 'Halaman Detail',
        layout: 'layouts/main-layout',
        contacts
    })
})

app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);
    res.render('detail', { 
        title: 'Halaman Contact',
        layout: 'layouts/main-layout',
        contact
    })
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})