const express = require('express')
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party middleware
app.use(expressLayout);
app.use(morgan('dev'));

// Built-in middleware
app.use(express.static('public')); // membuat file static dapat diakses

// Application level middleware
app.use((req, res, next) => {
    console.log('Time : ', Date.now());
    next();
});

app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname })
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
    // res.sendFile('./about.html', { root: __dirname })
    res.render('about', { 
        title: 'Halaman About',
        layout: 'layouts/main-layout'
    })
})

app.get('/contact', (req, res) => {
    // res.sendFile('./contact.html', { root: __dirname })
    res.render('contact', { 
        title: 'Halaman Contact',
        layout: 'layouts/main-layout'
    })
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} </br> Category ID : ${req.query.category}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})