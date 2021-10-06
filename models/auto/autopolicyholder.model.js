const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  zipCode: { tyep: Number },
  city: { type: String, required: true },
  state: { type: String, required: true },
}, { _id: false })

const policyHolderSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  dob: { type: Date },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  maritalStatus: { type: String, enum: ['married', 'unmarried', 'divorced'] },
  presentAddress: addressSchema,
  permanentAddress: addressSchema,
  policies: [{ type: Schema.Types.ObjectsId }]
})

module.exports = mongoose.model('Autopolicyholder', policyHolderSchema)