const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('<h1>Hello World!</h1>')
    // res.json({
    //     nama: 'Budi Darmawan',
    //     email: 'budidarmawan@gmail.com',
    //     noHP: '081234567890'
    // })
    res.sendFile('./index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname })
    // res.send('Ini adalah halaman about')
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname })
    // res.send('Ini adalah halaman contact')
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

// const http = require('http');
// const fs = require('fs');

// const port = 3000;

// http
//     .createServer((req, res) => {
//         // tipe content
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//         });

//         // abstraksi render html
//         const renderHTML = (path, res) => {
//             fs.readFile(path, (err, data) => {
//                 if (err) {
//                     res.write(404);
//                     res.write('Error: file not found');
//                 } else {
//                     res.write(data);
//                 }
//                 res.end();
//             });
//         }

//         const url = req.url;
//         // console.log(url);

//         switch (url) {
//             case '/about':
//                 renderHTML('./about.html', res);
//                 break;
//             case '/contact':
//                 renderHTML('./contact.html', res);
//                 break;
//             default:
//                 renderHTML('./index.html', res);
//                 break;
//         };

//     })
//     .listen(port, () => {
//         console.log(`Server is listening on port ${port}..`);
//     });