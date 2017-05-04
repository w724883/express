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
ListDAO.prototype.find = function(query, callback) {
	List.find(query,function(err, obj){
		callback(err, obj);
	});
};
module.exports = new ListDAO();