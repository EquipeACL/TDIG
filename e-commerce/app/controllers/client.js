module.exports.login = function(application,req,res){
	res.render('login');
}

module.exports.cadastro = function(application,req,res){
	res.render('cadastro-cliente');
}

module.exports.checkout = function(application,req,res){
	res.render('checkout');
}