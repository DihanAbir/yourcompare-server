const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
  typeofCar: {
    type: String,
    enum: ['private', 'commercial'],
    required: true
  },
  category: {
    type: String,
    enum: ['bus', 'truck', 'van', 'car', 'two-wheeler', 'three-wheeler'],
    required: true
  },
  brand: {
    name: { type: String, required: true },
    model: { type: String, required: true },
    launchYear: { type: Number, required: true },
    _id: false
  },
  carNo: {
    type: String,
    required: true
  },
  chassisNo: {
    type: String,
    required: true
  },
  carLicenseImage: {
    type: String
  },
  registrationDate: {
    type: Date,
    required: true
  },
  drivingLicenseImage: String,
  carPrice: {
    type: Number,
    required: true
  }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)
module.exports = Vehicle