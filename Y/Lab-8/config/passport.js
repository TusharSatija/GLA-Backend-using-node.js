let passport=require('passport');
let user=require('../model/user');
let brcypt=require('bcrypt');
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {  
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (brcypt.compare(password,hash,(err,result)=>{
          if(!result)
            { return done(null, false); }
          })) 
      return done(null, user);
    });
  }
));