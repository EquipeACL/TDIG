module.exports.cadastro = function(application,req,res){
	if(req.session.nome==undefined){
		res.render('acesso-negado', {msg:""});
		return;
	}
	res.render('cadastro-produto',{msg:req.session.nome});
}

module.exports.pesquisar = function(application,req,res){
	if(req.session.nome==undefined){
		res.render('acesso-negado', {msg:""});
		return;
	}
	res.render('pesquisa-produtos',{msg:req.session.nome});
}

module.exports.cadastrocategoria = function(application,req,res){
	if(req.session.nome==undefined){
		res.render('acesso-negado', {msg:""});
		return;
	}
	res.render('cadastro-categoria',{msg:req.session.nome});
}

module.exports.listarclientes = function(application,req,res){
	if(req.session.nome==undefined){
		res.render('acesso-negado', {msg:""});
		return;
	}
	res.render('lista-clientes',{msg:req.session.nome});
}

module.exports.listarcompras = function(application,req,res){
	if(req.session.nome==undefined){
		res.render('acesso-negado', {msg:""});
		return;
	}
	res.render('lista-compras',{msg:req.session.nome});
}