var Team = require('mongoose').model('Team');
var Match = require('mongoose').model('Match');

exports.addTeam = function (req, res, next) {
    if(!req.user){
        res.status(400);
        res.send();
    }else if(req.user.userName == req.body.data.user.userName){
        var team = req.body.data.team;
        Team.create({
            teamName:team.teamName,
            teamCaptain:team.captain,
            players:[
                {name:team.player[0].name},
                {name:team.player[1].name},
                {name:team.player[2].name},
                {name:team.player[3].name},
                {name:team.player[4].name}
            ],
            regDate:team.regDate,
            qualifiedForNext:true,
            ScoreForThisRound:0,
            ScoreTotal:0,
            branch:team.branch
        });

        res.send(true);

    }else{
        res.status(400);
        res.send()
    }
};

exports.updateTeam = function (req, res, next) {
    if(!req.user){
        res.status(400);
        res.send();
    }else if(req.user.userName === req.body.user.userName){
        var updateTeam = req.body.team;

        Team.findById({_id:updateTeam._id}).exec(function (err, team) {
           if(err) res.send({reason:'err occurred'});

            team.ScoreForThisRound = updateTeam.ScoreForThisRound;
            team.ScoreTotal = updateTeam.ScoreTotal;
            team.qualifiedForNext = updateTeam.qualifiedForNext;

            team.save();
            res.send(true);
        });
    }else{
        res.status(400);
        res.send()
    }
};

exports.addMatch = function(req, res){
    if(!req.user){
        res.status(400);
        res.send();
    }else if(req.user.userName === req.body.data.user.userName){
        var match = req.body.data.match;

        Match.create(match);

        res.send(true);
    }else{
        res.status(400);
        res.send()
    }
};

exports.updateIndMatch= function(req,res){
    if(!req.user){
        res.status(400);
        res.send();
    }else if(req.user.userName === req.body.user.userName){
        var match = req.body.newData;

        Match.update({_id:req.params.tId}, match, function (err, count) {
            if(err) res.send({reason:false});

            if(count) res.send(true);
        });
    }else{
        res.status(400);
        res.send()
    }
};

exports.deleteIndMatch = function(req,res){
    if(!req.user){
        res.status(400);
        res.send();
    }else{
        Match.find({_id:req.params.tId}).remove().exec(function () {
           res.send(true);
        });
    }
};