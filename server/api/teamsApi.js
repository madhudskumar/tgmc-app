var Team = require('mongoose').model('Team');
var Match = require('mongoose').model('Match');

exports.getTeams = function (req, res, next) {
    Team.find({}).exec(function (err, doc) {
        if(err){
            res.status(400);
            res.send({reason:'err occurred'});
        }

        res.send({teams:doc});
    });
};

exports.getMatches = function (req, res) {
    Match.find({}).exec(function (err, doc) {
        if(err) {
            res.status(400);
            res.send();
        }

        res.send(doc)
    });
};

exports.getIndTeam = function (req, res) {
    Team.findById(req.params.tId).exec(function (err, doc) {
        if(err) {
            res.status(400);
            res.send();
        }

        res.send(doc);
    })
};
