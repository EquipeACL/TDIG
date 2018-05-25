module.exports.login = function(application,req,res){
	res.render('login',{validacao:{}});
}

module.exports.cadastro = function(application,req,res){
	res.render('cadastro-cliente');
}

module.exports.checkout = function(application,req,res){
	res.render('checkout');
}

module.exports.autentica = function(application,req,res){

	var dadosForm = req.body;

	req.assert('login', 'Login não deve ser vazio').notEmpty();
	req.assert('senha', 'Senha não deve ser vazia').notEmpty();

	var erros = req.validationErrors();
	if(erros){
		res.render("login", {validacao:erros});
		return;
	}

	var connection = application.config.dbConnection;
	var ClienteDAO = new application.app.models.ClienteDAO(connection);
	ClienteDAO.autentica(req.body,req,res);

}

module.exports.logout = function(application,req,res){
	req.session.destroy( function(err){
		res.render("home", {msg: ""});
	});
}