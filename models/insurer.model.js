const mongoose = require("mongoose")

const insurerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    unique: true,
    required: true
  },
  tradeName: {
    type: String,
    unique: true,
    required: true
  },
  registrationNo: {
    type: String
  },
  establishmentYear: Number,
  website: String,
  email: String,
  phone: String,
  address: {
    street: String,
    city: String,
    state: String
  }
})

const Insurer = mongoose.model('Insurer', insurerSchema)
module.exports = Insurer