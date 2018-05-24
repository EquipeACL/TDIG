module.exports.cadastro = function(app,req,res){
	res.render('cadastro-produto')
}

module.exports.estoque = function(app,req,res){
	res.render('estoque')	
}

module.exports.produto = function(app,req,res){
	//console.log(req.query);
	res.render('produto')
}