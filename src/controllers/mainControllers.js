const fs = require("fs");
const productosJson = JSON.parse(fs.readFileSync("./src/data/products.json","utf-8"));

const mainControllers = {
    home: (req, res) => {
        res.render('home', { title: 'Home | Funkoshop',coleccion : productosJson });
    },
    contact: (req, res) => res.render('shop/contact', { title: 'Contact | Funkoshop'}),
    about: (req, res) => res.render('shop/about', { title: 'About | Funkoshop'}),
    faqs: (req, res) => res.render('shop/faqs', { title: 'Faqs | Funkoshop'})
}

module.exports = mainControllers;