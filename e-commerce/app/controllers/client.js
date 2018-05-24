module.exports.login = function(app,req,res){
	res.render('login');
}

module.exports.cadastro = function(app,req,res){
	res.render('cadastro-cliente')
}

module.exports.checkout = function(app,req,res){
	res.render('checkout');
}