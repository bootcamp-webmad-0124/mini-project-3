const { Schema, Types, model } = require("mongoose")

const studentSchema = new Schema({
    firtName: String,
    lastName: String,
    email: String,
    phone: String,
    linkedinUrl: String,
    languages: [String],
    program: String,
    background: String,
    image: String,
    cohort: Types.ObjectId,
    projects: Array,
})

const Student = model("Student", studentSchema)

module.exports = Student