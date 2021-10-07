const mongoose = require("mongoose")
const Autoplan = require("../auto/plan.model")
const Autopolicyholder = require("../auto/policyholder.model")
const Vehicle = require("../auto/vehicle.model")
const User = require("../User")

const premiumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  value: { type: Number, required: true },
  _id: false
})

const insuranceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  policyHolder: {
    type: mongoose.Types.ObjectId,
    ref: "Autopolicyholder",
    required: true
  },
  planId: {
    type: mongoose.Types.ObjectId,
    ref: "Autoplan",
  },
  vehicle: {
    type: mongoose.Types.ObjectId,
    ref: "Vehicle",
    required: true
  },
  planDetails: {
    idv: { type: Number, required: true },
    addons: [premiumSchema],
    premiums: [premiumSchema],
    discounts: [premiumSchema],
    taxPercentage: { type: Number, required: true },
    netPremium: { type: Number, required: true }
  },
  purchaseDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  expireDate: {
    type: Date,
    required: true
  },
  renewal: {},
  claim: {}
})

const AutoInsurance = mongoose.model('AutoInsurance', insuranceSchema)
module.exports = AutoInsurance