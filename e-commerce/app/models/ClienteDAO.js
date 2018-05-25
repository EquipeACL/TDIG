var ObjectID = require('mongodb').ObjectId;

function ClienteDAO(connection){
	this._connection = connection();
}


ClienteDAO.prototype.autenticar = function(usuario,req, res){

	this._connection.open( function(err, mongo){
		mongo.collection("cliente", function(err, collection){
			collection.find(usuario).toArray(function(err, result){
				if(result==null || result.length == 0){
					res.render('login',{validacao:[{msg:"Usuário ou senha incorretos"}],dadosForm:usuario});
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

ClienteDAO.prototype.salvar = function(usuario,req,res){

	this._connection.open(function(err,mongo){
		mongo.collection("cliente", function(err,collection){
			collection.insert(usuario, function(err,result){
				if(err){
					// cpf duplicado
					if(err.code === 11000){
						res.render('cadastro-cliente',{validacao:[{msg:"Já existe um usuário com esse CPF"}], dadosForm:usuario});
						mongo.close();
						return;
					}
				}	
				res.redirect('/');
				mongo.close();		
			});
			
		});
	});
}

module.exports = function(){
	return ClienteDAO;
}