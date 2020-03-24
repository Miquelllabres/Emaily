const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

const bodyParser = require('body-parser');
const path=require('path');
// const methodOverride = require('method-override');
// const flash = require('connect-flash');

require("./models/users");
require("./services/passport");

mongoose.connect(keys.database, { useNewUrlParser: true });

const app = express();


//method override middleware
// app.use(methodOverride('_method'))


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); 
app.use(passport.initialize());
app.use(passport.session()); 
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

 //Set Global Variable
  // app.use(function(req,res,next){
  //   res.locals.sucess_msg=req.flash('sucess_msg');
  //   res.locals.error_msg=req.flash('error_msg');
  //   res.locals.error=req.flash('error');
  //   res.locals.user=req.user||null
  //   next();
  // });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Set Static Path
app.use(express.static(path.join(__dirname,'public')));

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
