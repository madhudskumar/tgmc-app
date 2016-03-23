var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
    teamName:{type:String, required:'{PATH} is required', unique:true},
    teamCaptain:{type:String},
    players:[
        {name:String}
    ],
    regDate:{type:Date,default:Date.now()},
    qualifiedForNext:{type:Boolean,default:true},
    ScoreForThisRound:{type:Number},
    ScoreTotal:{type:String},
    branch:{type:String,required:"{PATH} is required"}
});

var Team = mongoose.model('Team',teamSchema);

exports.createDefault = function(){
    Team.find({}).exec(function (err, col) {
        if(col.length === 0){
            Team.create({
                teamName:"Tigers",
                teamCaptain:"Manoj S Banakar",
                players:[
                    {name:"Vinod Kumar S V"},
                    {name:"Parikshith N K "},
                    {name:"Vivek Kadam"},
                    {name:"Maruthi K M "},
                    {name:"Madhu Kumar D S "}
                ],
                regDate:Date.now(),
                qualifiedForNext:false,
                ScoreForThisRound:0,
                ScoreTotal:0,
                branch:"CS & E"
            });
        }
    });
};