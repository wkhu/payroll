const mongoose = require('mongoose');
const Schema = mongoose.Schema

const inoutSchema = new mongoose.Schema({
  employee: { type: Schema.Types.ObjectId, ref: 'Employee' },
  time: [Date]
}, { timestamps: true });

const Inout = mongoose.model('Inout', inoutSchema);

module.exports = Inout;
