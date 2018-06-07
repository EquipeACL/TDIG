module.exports = function(application){
	application.get('/cadastrar_produto', function(req, res){
		application.app.controllers.admin.cadastro(application, req, res);
	});

	application.get('/pesquisar_produtos', function(req, res){
		application.app.controllers.admin.pesquisar(application, req, res);
	});

	application.get('/cadastrar_categoria', function(req, res){
		application.app.controllers.admin.cadastrocategoria(application, req, res);
	});

	application.get('/listar_clientes', function(req, res){
		application.app.controllers.admin.listarclientes(application, req, res);
	});

	application.get('/listar_compras', function(req, res){
		application.app.controllers.admin.listarcompras(application, req, res);
	});
}