module.exports = function(application){
	application.get('/login', function(req, res){
		//application.app.controllers.client.login(application, req, res);
		res.send('login');
	});
}

module.exports = function(application){
	application.get('/cadastrar_cliente', function(req, res){
		application.app.controllers.client.cadastro(application, req, res);
	});
}

module.exports = function(application){
	application.get('/checkout', function(req,res){
		application.app.controllers.client.checkout(application,req,res);
	});
}