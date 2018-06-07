module.exports.estoque = function(application,req,res){
	res.render('estoque',{msg:req.session.nome});	
}

module.exports.produto = function(application,req,res){
	res.render('produto',{msg:req.session.nome});
}