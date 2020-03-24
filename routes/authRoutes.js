const passport = require('passport');
const mongoose = require("mongoose");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate('google', {
      scope: ["profile", "email"]
    })
  );

  // app.get("/auth/google/callback", passport.authenticate("google"));
  app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect : '/user-dashboard'
  }));

// app.get(
//     "/auth/google/callback",
//     passport.authenticate("google"),
//     (req, res) => {
//       res.redirect("/test");
//     }
//   );

  // app.get("/testing", (req, res) => {
  //   res.redirect("/test");
  //   console.log("Redirected to home page.");
  // });
  
  

  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log("You just logged out.");

    res.redirect("/");
    console.log("Redirected to home page.");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);

  });

  app.post('/users/register', passport.authenticate('local-signup', {
        successRedirect : '/test', // redirect to the secure profile section
        failureRedirect : '/users/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

 

 app.post('/users/login', passport.authenticate('local-login', {
        successRedirect : '/test', // redirect to the secure profile section
        failureRedirect : '/users/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));






};

