var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    name: String,
    circuitImg: String,
    cupImg: String,
    cupName: String,
    tags: Array,
    console: String
});

var courseModel = mongoose.model('courses', courseSchema);

module.exports = courseModel;