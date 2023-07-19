class NewsController{
    //[GET] /news
        index(req,res){
            res.render('news')
        }

        //[GET] /news/:slug(bien dong)
        show(req,res){
            res.send('Slug News')
        }
    }

module.exports = new NewsController;
