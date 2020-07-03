const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    label : { type: String, required: true },
    state : { type: Boolean, default: false },
});

module.exports = mongoose.model('Thing', thingSchema);