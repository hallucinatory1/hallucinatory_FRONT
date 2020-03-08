const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
  nom_client: { type: String, required: true, max: 100 },
  taux_remise: { type: Number, required: true },
});

module.exports = mongoose.model("Client", ClientSchema)