const { Arma, Tirador } = require("./models.js");


// ------- ARMAS

exports.readArmas = (req, res) =>
    Arma.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readArma = (req, res) =>
    Arma.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteArma = (req, res) =>
    Arma.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateArma = (req, res) =>
    Arma.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, precio: req.body.precio } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createArma = (req, res) =>
    new Arma({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



// ------ TIRADORES

exports.readTiradores = (req, res) =>
    Tirador.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readTirador = (req, res) =>
    Tirador.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteTirador = (req, res) =>
    Tirador.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



exports.updateTirador = (req, res) =>
    Tirador.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createTirador = (req, res) =>
    new Tirador({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });