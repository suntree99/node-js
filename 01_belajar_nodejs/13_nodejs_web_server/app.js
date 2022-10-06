const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.write('Hello World!');
//     res.end();
// });
// server.listen(3000, () => {
//     console.log('Server is listening on port 3000..');
// });

const port = 3000;

http
    .createServer((req, res) => {
        // tipe content
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        // abstraksi render html
        const renderHTML = (path, res) => {
            fs.readFile(path, (err, data) => {
                if (err) {
                    res.write(404);
                    res.write('Error: file not found');
                } else {
                    res.write(data);
                }
                res.end();
            });
        }

        const url = req.url;
        // console.log(url);

        switch (url) {
            case '/about':
                renderHTML('./about.html', res);
                break;
            case '/contact':
                renderHTML('./contact.html', res);
                break;
            default:
                renderHTML('./index.html', res);
                break;
        };

        // if (url === '/about') {
        //     renderHTML('./about.html', res);
        // } else if (url === '/contact') {
        //     renderHTML('./about.html', res);
        // } else {
        //     // res.write('Hello World!');
        //     renderHTML('./index.html', res);
        // };
    })
    .listen(port, () => {
        console.log(`Server is listening on port ${port}..`);
    });