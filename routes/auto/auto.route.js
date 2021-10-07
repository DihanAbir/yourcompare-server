const express = require("express")
const router = express.Router()
const {
  addInsurer, updateInsurer, deleteInsurer,
  addPlan, updatePlan, deletePlan
} = require("../../controllers/auto/admin.controller")
const {
  addInsurancePolicy
} = require("../../controllers/auto/insurance.controller")


router.post("/add-insurer", addInsurer)
router.put("/update-insurer", updateInsurer)
router.delete("/delete-insurer", deleteInsurer)

router.post("/plan", addPlan)
router.put("/plan", updatePlan)
router.delete("/plan", deletePlan)

router.post("/insurance", addInsurancePolicy)

module.exports = router
