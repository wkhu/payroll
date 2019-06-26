const Daytype = require('../models/Daytype');

/**
 * GET /employee
 * Employee page.
 */
exports.getDayType = (req, res) => {
  res.render('payroll/dayType', {
    title: 'Day Type'
  });
};