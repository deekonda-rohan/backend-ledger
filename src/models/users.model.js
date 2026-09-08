const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Email is required"],
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim: true
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        trim: true,
        select: false,
    }
})


module.exports = mongoose.model('User', userSchema);