const Employee = require('../models/Employee');

/**
 * GET /employee
 * Employee page.
 */
exports.getEmployee = (req, res) => {
  res.render('payroll/employee', {
    title: 'Employee'
  });
};