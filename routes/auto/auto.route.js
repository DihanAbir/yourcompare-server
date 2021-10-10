const express = require("express")
const router = express.Router()
const {
  addInsurer, updateInsurer, deleteInsurer,
  addPlan, updatePlan, deletePlan, getAllPlans, getAllInsurers, getInsurerNames
} = require("../../controllers/auto/admin.controller")
const {
  addInsurancePolicy
} = require("../../controllers/auto/insurance.controller")

router.get("/insurer", getAllInsurers)
router.get("/insurer/company-names", getInsurerNames)

router.post("/insurer", addInsurer)
router.put("/insurer", updateInsurer)
router.delete("/insurer", deleteInsurer)

router.get("/plan", getAllPlans)
router.post("/plan", addPlan)
router.put("/plan", updatePlan)
router.delete("/plan", deletePlan)

router.post("/insurance", addInsurancePolicy)

module.exports = router
