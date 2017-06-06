var mongodb = require('./mongodb');
var crypto = require('crypto');
var Schema = mongodb.Schema;
var ListSchema = new Schema({
	username : String,
	password : String,
	create_date : { type: Date, default: Date.now}
});
var User = mongodb.model("user", ListSchema);
var UserDAO = function(){};
var hmacKey = '123';

UserDAO.prototype.find = function(obj, callback) {
	var hmac = crypto.createHmac('sha1', hmacKey);
	
	User.findOne({username:obj.username}).exec(function(err, result){
		hmac.update(obj.password);
		var password = hmac.digest('hex');
		callback(err, result ? (result.password === password) : null);
	});
};

UserDAO.prototype.save = function(obj, callback) {
	this.find(obj,function(err,result){
		if(err){
			callback(err,result);
		}else{
			if(result === null){
				var hmac = crypto.createHmac('sha1', hmacKey);
				hmac.update(obj.password);
				obj.password = hmac.digest('hex');
				new User(obj).save(function(error){
					callback(error,null);
				});
			}else{
				callback(err,result);
			}
		}
	});
	
};
module.exports = new UserDAO();