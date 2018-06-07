module.exports = function(application){
	application.get('/estoque', function(req,res){
		application.app.controllers.product.estoque(application,req,res);
	});

	application.get('/produto', function(req,res){
		application.app.controllers.product.produto(application,req,res);
	});
}

