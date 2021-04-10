const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    secondName: String,
    position: String,
    about: String,
    github: String,
    contacts: [
        { type: {type: String}, data: String }
    ],
    work: [
        {
            dateStart: String,
            dateEnd: String,
            position: String,
            place: String,
            responsibilities: [String],
        }
    ],
    education: [
        {
            dateStart: String,
            dateEnd: String,
            place: String,
            country: String,
            type: { type: String },
            specialization: String,
        }
    ],
    skills: [String],
    languages: [{ lang: String, level: String }],
    courses: [{ name: String, place: String, data: Number}]
})

const UserSchema = mongoose.model('User', userSchema);

module.exports = UserSchema;
