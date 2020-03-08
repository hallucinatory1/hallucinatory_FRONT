const Client = require("../models/client.model");

exports.client_create = function (req, res, next) {
    let client = new Client({
        nom_client: req.body.card.name,
        taux_remise: 0.2,
    });
    client.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send("The client has been created succcessfully");
    });
};