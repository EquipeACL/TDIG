module.exports.cadastro = function(application,req,res){
	if(req.session.nome==undefined){
		res.render('cadastro-produto', {msg:""});
		return;
	}
	res.render('cadastro-produto',{msg:req.session.nome});
}

module.exports.estoque = function(application,req,res){
	res.render('estoque');	
}

module.exports.produto = function(application,req,res){
	res.render('produto');
}