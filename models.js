const mongoose = require('mongoose');

const Arma = mongoose.model('Arma',
    new mongoose.Schema({ nombre: String, precio: Number })
);

const Tirador = mongoose.model('Tirador',
    new mongoose.Schema({ nombre: String, apellidos: String }, { collection: 'tiradores' }) // mongoose intenta establecer las colecciones con nombres descriptivos en plural 
);

module.exports = {
    Arma: Arma,
    Tirador: Tirador
}