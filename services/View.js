var View, roles;

roles = ["public", "admin"];

View = {
  render: function(req, res) {
    var base, userData;
    console.log(req.headers.host, req.session, 'view');
    userData = req.session.passport;
    if (userData && Object.keys(userData).length) {

      /*
      determine the active sessionType this user is using
       */
      return res.render(roles[userData.user.userType]);
    } else {
      return res.render(roles[0]);
    }
  }
};

module.exports = View;
