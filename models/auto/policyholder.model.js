const mongoose = require('mongoose')
const AutoInsurance = require("../auto/insurance.model")

const addressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  zipcode: { tyep: Number },
  city: { type: String, required: true },
  state: { type: String, required: true },
}, { _id: false })

const policyHolderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  maritalStatus: {
    type: String,
    enum: ['married', 'unmarried', 'divorced'],
    required: true
  },
  presentAddress: {
    type: addressSchema,
    required: true
  },
  permanentAddress: {
    type: addressSchema,
    required: true
  },
  policies: [{ type: mongoose.Types.ObjectId, ref: "AutoInsurance" }]
})

const Autopolicyholder = mongoose.model('Autopolicyholder', policyHolderSchema)
module.exports = Autopolicyholder