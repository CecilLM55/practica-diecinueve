const mongoose = require('mongoose');
let PersonSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Users', PersonSchema);
