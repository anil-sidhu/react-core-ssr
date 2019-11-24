import 'babel-polyfill'
import express from 'express'
import react from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import App from './src/App'
import bodyParser from 'body-parser'
// const express = require('express')
const app = express();
const PORT = 4000

app.use(bodyParser.json());
app.use(express.static('build/public'));
app.get('/*', (req, res, data) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    // const indexFile = path.resolve('./build/index.html');
    // fs.readFile(indexFile, 'utf8', (err, data) => {
    //   if (err) {
    //     console.error('Something went wrong:', err);
    //     return res.status(500).send('Oops, better luck next time!');
    //   }
    const html = `<div id="root">${app}</div>`
    return res.send(
        `<div id="root">${app} <script src="client_bundle.js"></script> </div>`
        // data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
    // });
});

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
}) 