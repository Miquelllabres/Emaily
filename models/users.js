const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt=require('bcrypt'); 


const userSchema = new Schema({
	local            : {
        name         : String,
        email        : String,
        password     : String
      
    },
    google           : {
        googleId     : String,
        token        : String,
        email        : String,
        name         : String
        
    }
 
});
// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('users', userSchema);

