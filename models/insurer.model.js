const mongoose = require("mongoose")

const insurerSchema = new mongoose.Schema({
  companyName: String
})

const Insurer = mongoose.model('Insurer', insurerSchema)
module.exports = Insurer