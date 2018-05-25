module.exports.login = function(application,req,res){
	res.render('login',{validacao:{}, dadosForm:{}});
}

module.exports.cadastro = function(application,req,res){
	res.render('cadastro-cliente', {validacao:{},dadosForm:{}});
}

module.exports.checkout = function(application,req,res){
	res.render('checkout');
}

module.exports.autenticar = function(application,req,res){

	var dadosForm = req.body;

	req.assert('login', 'Login não deve ser vazio').notEmpty();
	req.assert('senha', 'Senha não deve ser vazia').notEmpty();

	var erros = req.validationErrors();
	if(erros){
		res.render("login", {validacao:erros,dadosForm:dadosForm});
		return;
	}

	var connection = application.config.dbConnection;
	var ClienteDAO = new application.app.models.ClienteDAO(connection);
	ClienteDAO.autenticar(dadosForm,req,res);

}

module.exports.cadastrar = function(application,req,res){
	

	var dadosForm = req.body;

	req.assert('nome', 'Nome não deve ser vazio').notEmpty();
	req.assert('tel', 'Telefone não deve ser vazio').notEmpty();
	req.assert('email', 'Email não pode ser vazio').notEmpty();
	req.assert('email', 'Email inválido').isEmail();
	req.assert('login', 'Nome de Usuário não deve ser vazio').notEmpty();
	req.assert('senha', 'Senha não deve ser vazia').notEmpty();
	req.assert('confsenha','Digite sua senha novamente').notEmpty();

	var erros = req.validationErrors();
	
	if(req.body.senha!==req.body.confsenha){
		erros.push({param:'confsenha' , msg:'As senhas não conferem',value:''})	
	}

	if(erros){
		res.render("cadastro-cliente", {validacao:erros, dadosForm:dadosForm});
		return;
	}
	
	delete dadosForm.confsenha;
	
	var connection = application.config.dbConnection;
	var ClienteDAO = new application.app.models.ClienteDAO(connection);
	ClienteDAO.salvar(dadosForm,req,res);
}


module.exports.logout = function(application,req,res){
	req.session.destroy( function(err){
		res.redirect("/");
	});
}

