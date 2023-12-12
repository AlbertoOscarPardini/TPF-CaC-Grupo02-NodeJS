const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const errorHandlers = require('./src/utils/errorHandlers');
require('dotenv').config();
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({extended: true})); 

// Logica para usar los archivos de public

app.use(express.static('public'));

// Configuración del Template Engine

app.set('view engine', 'ejs');
app.set('views', './src/views');

/* Parsea los datos recibidos por POST */

app.use(express.urlencoded());
app.use(express.json());

// Override para habilitar PUT y DELETE

app.use(methodOverride('_method'));

// Rutas de la apliación 

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Ruta para error

app.use(errorHandlers.notFoundPage)

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}/home`))