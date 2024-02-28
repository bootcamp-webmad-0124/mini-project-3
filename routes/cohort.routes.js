const express = require('express')
const router = express.Router()

const Cohort = require('./../models/Cohort.model')

router.get('/api/cohorts', (req, res) => {
    Cohort
        .find()
        .sort({ startDate: 1, campus: 1 })
        .then(cohorts => res.json(cohorts))
        .catch(err => console.log(err))
})

router.get('/api/cohorts/web', (req, res) => {
    Cohort
        .find({ program: 'Web Dev' })
        .select({ program: 1, campus: 1, totalHours: 1 })
        .then(cohorts => res.json(cohorts))
        .catch(err => console.log(err))
})

module.exports = router