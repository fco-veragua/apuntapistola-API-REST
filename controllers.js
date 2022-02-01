const { Arma, Tirador } = require("./models.js");


// ------- ARMAS

exports.readArmas = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readArma = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteArma = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateArma = (req, res) =>
    Cliente.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, precio: req.body.precio } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createArma = (req, res) =>
    new Cliente({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



// ------ TIRADORES

exports.readTiradores = (req, res) =>
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readTirador = (req, res) =>
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteTirador = (req, res) =>
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



exports.updateTirador = (req, res) =>
    Articulo.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createTirador = (req, res) =>
    new Articulo({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });