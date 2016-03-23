module.exports = function (app, config) {
    app.listen(config.port);
    console.log('listening on ' + config.port);
};