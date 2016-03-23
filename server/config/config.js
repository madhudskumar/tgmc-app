var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');

module.exports = {
    development:{
        rootPath:rootPath,
        db:'mongodb://localhost/bpl',
        port: process.env.PORT || 7777,
        secret:'!gayOutCow10iHelixCoder',
        env:'development'
    },
    production: {
        rootPath: rootPath,
        db:'mongodb://mkds:killer7!@ds059145.mongolab.com:59145/bpl',
        secret:'!gayOutCow10iHelixCoder',
        env:'production',
        port: process.env.PORT || 80
    }
};
