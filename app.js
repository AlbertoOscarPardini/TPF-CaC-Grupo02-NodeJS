const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// Logica para usar los archivos de public
app.use(express.static('public'));

app.get('/', (req, res) => res.send('pong'));

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto: ${PORT}`))