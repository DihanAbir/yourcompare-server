const mongoose = require("mongoose")

const planSchema = new mongoose.Schema({
  idv: { type: Number, required: true },
  addons: { type: Map, of: String }
})

module.exports = mongoose.model('Autoplan', planSchema)