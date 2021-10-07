const asyncHandler = require("../../middleware/async")
const AutoInsurance = require("../../models/auto/insurance.model")
const Autopolicyholder = require("../../models/auto/policyholder.model")
const Vehicle = require("../../models/auto/vehicle.model")

/**
 * @desc Add insurance policy
 * @route POST /api/auto/insurance
 * @access Private
 */
exports.addInsurancePolicy = asyncHandler(async (req, res, next) => {
  const { autoPolicyHolder, vehicleDetails, planId, planDetails, expireDate } = req.body

  const policyHolder = await Autopolicyholder(autoPolicyHolder).save()
  const vehicle = await Vehicle(vehicleDetails).save()
  if (policyHolder && vehicle) {
    const insurance = await AutoInsurance({
      policyHolder: policyHolder._id,
      planId: planId,
      vehicle: vehicle._id,
      planDetails: planDetails,
      purchaseDate: Date.now(),
      expireDate: expireDate
    }).save()
    return res.status(200).json({ insurance })
  }
})