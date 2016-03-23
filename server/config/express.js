var morgan = require('morgan'),
    express = require('express'),
    fav = require('serve-favicon'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    passport = require('passport'),
    helmet = require('helmet'),
    cookieParser = require('cookie-parser');

module.exports = function (app, config) {
    //jade
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    //helmet
    app.use(helmet());

    //body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //session and cookies
    app.use(cookieParser());

    var sess = {
        secret: config.secret,
        resave:false,
        saveUninitialized: false
    };
    app.use(session(sess));

    //errorHandler
    if (config.env === 'development') {
        // only use in development
        app.use(errorHandler({log:true}));
    }

    //static
    app.use(express.static(config.rootPath + '/public'));

    app.use(fav(config.rootPath + '/public/favicon/favicon.ico'));

    app.use(passport.initialize());
    app.use(passport.session());
};