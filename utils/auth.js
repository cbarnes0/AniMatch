const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    console.log('withAuth reached');
    if (!req.session.loggedIn) {
      res.redirect('/');
    } else {
      next();
    }
  };
  module.exports = withAuth;