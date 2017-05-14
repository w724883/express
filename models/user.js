var mongodb = require('./mongodb');
var Schema = mongodb.Schema;
var ListSchema = new Schema({
	username : String,
	password : String,
	create_date : { type: Date, default: Date.now}
});
var User = mongodb.model("user", ListSchema);
var UserDAO = function(){};
UserDAO.prototype.save = function(obj, callback) {
	var instance = new User(obj);
	instance.save(function(err){
		callback(err);
	});
};

UserDAO.prototype.find = function(username, callback) {

	User.findOne({username}).exec(function(err, result){
		callback(err, result);
	});
};
module.exports = new UserDAO();