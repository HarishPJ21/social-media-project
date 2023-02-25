module.exports.home = function(req,res){
    return res.render('home',{
        title: "Home",
        header: "Social media"
    });
}; 