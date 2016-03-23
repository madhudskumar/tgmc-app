var mongoose = require('mongoose'),
    enscript = require('../utility/enscription');

//TODO:user authentication and authorisation
var userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:'{PATH} is required',
        unique:true
    },
    salt: {type:String, required:'{PATH} is required'},
    hash_pwd:{type:String, required:'{PATH} is required'}
});

userSchema.methods = {
    authenticate: function (ptm) {
        return enscript.hashPWD(this.salt ,ptm) === this.hash_pwd;
    },
    hasRole: function (role) {
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {

    User.find({}).exec(function (err, collection) {
        if (err) throw err;

        if (collection.length === 0) {
            var salt = enscript.createSalt();
            var hash = enscript.hashPWD(salt, 'runningHome@9');
            User.create({
                userName:'madhudskumar',
                salt:salt,
                hash_pwd:hash
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;