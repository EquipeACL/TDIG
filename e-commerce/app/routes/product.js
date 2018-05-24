module.exports = function(application){
	application.get('/cadastrar_produto', function(req, res){
		application.app.controllers.product.cadastro(application, req, res);
	});

	application.get('/estoque', function(req,res){
		application.app.controllers.product.estoque(application,req,res);
	});

	application.get('/produto', function(req,res){
		application.app.controllers.product.produto(application,req,res);
	});
}

