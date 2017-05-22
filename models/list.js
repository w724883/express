var mongodb = require('./mongodb');
var Schema = mongodb.Schema;
var ListSchema = new Schema({
	title : String,
	descriptions : String,
	create_date : { type: Date, default: Date.now}
});
var List = mongodb.model("list", ListSchema);
var ListDAO = function(){};
ListDAO.prototype.save = function(obj, callback) {
	var instance = new List(obj);
	instance.save(function(err){
		callback(err);
	});
};
ListDAO.prototype.find = function(req, callback) {
	var num = req.query.num*1 || 5;
	var page = req.query.page*1 || 1;
	var key = req.query.key;
	List.find(key ? {$or:[{title:new RegExp(key)},{descriptions:new RegExp(key)}]} : null).sort({create_date:-1}).skip(num*(page-1)).limit(num).exec(function(err, obj){
		callback(err, {data:obj,num,page,key});
	});
};

module.exports = new ListDAO();