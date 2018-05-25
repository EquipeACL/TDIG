var ObjectID = require('mongodb').ObjectId;

function ClienteDAO(connection){
	this._connection = connection();
}


ClienteDAO.prototype.autentica = function(usuario,req, res){

	this._connection.open( function(err, mongo){
		mongo.collection("cliente", function(err, collection){
			collection.find(usuario).toArray(function(err, result){
				if(result==null || result.length == 0){
					res.render('login',{validacao:[{msg:"Usuário ou senha incorretos"}]});
					mongo.close();
					return;
				} 	
				req.session.nome = result[0].nome;
				res.redirect('/');
				mongo.close();
			});
		});
	});
	
}

module.exports = function(){
	return ClienteDAO;
}