const mongoose = require("mongoose")

const insurerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    unique: true,
    required: true
  }
})

const Insurer = mongoose.model('Insurer', insurerSchema)
module.exports = Insurer