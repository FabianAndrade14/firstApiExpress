const mongoose = require('mongoose');

//Con esta instrucción se crean los modelos, primero va el nombre luego la estructura
const Users = mongoose.model('User', {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
})

module.exports = Users;