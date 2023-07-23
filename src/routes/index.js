const newsRouter = require('./news');
const meRouter = require('./me');

const siteRouter = require('./site');
const coursesRouter = require('./courses');
import learningRouter from './learning'
function route(app){
    app.use('/learning',learningRouter)
    app.use('/news',newsRouter);
    app.use('/me',meRouter);
    app.use('/courses',coursesRouter);
    app.use('/',siteRouter);
}

module.exports=route;