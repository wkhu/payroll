const mongoose = require('mongoose');
const Schema = mongoose.Schema

const dayTypeSchema = new mongoose.Schema({
  name: { type: String, unique: true },
}, { timestamps: true });

const Daytype = mongoose.model('Daytype', dayTypeSchema);

module.exports = Daytype;
