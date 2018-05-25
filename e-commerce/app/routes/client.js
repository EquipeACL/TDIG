module.exports = function(application){
	application.get('/login', function(req, res){
		application.app.controllers.client.login(application, req, res);
	});

	application.get('/cadastrar_cliente', function(req, res){
		application.app.controllers.client.cadastro(application, req, res);
	});

	application.get('/checkout', function(req,res){
		application.app.controllers.client.checkout(application,req,res);
	});

	application.post('/autenticar', function(req,res){
		application.app.controllers.client.autentica(application,req,res);
	});

	application.get('/sair', function(req,res){
		application.app.controllers.client.logout(application,req,res);
	});
}


