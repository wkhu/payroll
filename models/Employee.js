const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  email: { type: String, unique: true },
  profile: {
    firstName: String,
    lastName: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  },
  rate: Number,
  inOuts: [{type: Schema.Types.ObjectId, ref: 'Inout'}]
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
