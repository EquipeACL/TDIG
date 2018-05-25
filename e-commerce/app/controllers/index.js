module.exports.home = function(application,req,res){
	if(req.session.nome==undefined){
		res.render('home', {msg:""});
		return;
	}
	res.render('home',{msg:req.session.nome});		
}