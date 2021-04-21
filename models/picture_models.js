'use strict';

var sql = require('../util/database');
// var utils = require('../utils/utils.js');

var Picture = function(user){
	this.created_at    = new Date();
}

Picture.upload = function(picture,data, result){
	console.log(picture);
	
		sql.query("UPDATE `user` SET `pic`= ? WHERE id= ?  ",[picture.file,data.id],function(err, data){
				if (err) {
					
					result(err,null);
				}
				else
				{
					picture.id = data.insertId;
					result(null,picture);
				}
			});
	
};


module.exports= Picture;