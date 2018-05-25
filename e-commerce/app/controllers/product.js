module.exports.cadastro = function(application,req,res){
	res.render('cadastro-produto');
}

module.exports.estoque = function(application,req,res){
	res.render('estoque');	
}

module.exports.produto = function(application,req,res){
	res.render('produto');
}