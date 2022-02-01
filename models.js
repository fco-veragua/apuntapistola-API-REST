const mongoose = require('mongoose');

const Arma = mongoose.model('Arma',
    new mongoose.Schema({ nombre: String, precio: Number })
);

const Tirador = mongoose.model('Tirador',
    new mongoose.Schema({ nombre: String, apellidos: String })
);

module.exports = {
    Arma: Arma,
    Tirador: Tirador
}