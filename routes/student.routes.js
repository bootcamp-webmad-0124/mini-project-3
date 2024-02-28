const express = require('express')
const router = express.Router()

const Student = require('./../models/Student.model')

router.get('/api/students', (req, res) => {
    Student
        .find()
        .then(students => res.json(students))
        .catch(err => console.log(err))
})

module.exports = router