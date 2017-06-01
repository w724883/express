var mongodb = require('./mongodb');
var Schema = mongodb.Schema;
var ListSchema = new Schema({
	username : String,
	password : String,
	create_date : { type: Date, default: Date.now}
});
var User = mongodb.model("user", ListSchema);
var UserDAO = function(){};

UserDAO.prototype.find = function(username, callback) {

	User.findOne({username}).exec(function(err, result){
		callback(err, result);
	});
};

UserDAO.prototype.save = function(obj, callback) {
	this.find(obj.username,function(err,result){
		if(err){
			callback(err,result);
		}else{
			if(result){
				callback(err,result);
			}else{
				var instance = new User(obj);
				instance.save(function(error){
					callback(error);
				});
			}
		}
	});
	
};
module.exports = new UserDAO();