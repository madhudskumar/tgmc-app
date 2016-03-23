var mongoose = require('mongoose');

var matchSchema = mongoose.Schema({
    teamOne:{type:String, required:'{PATH} is required'},
    teamTwo:{type:String, required:'{PATH} is required'},
    round:{type:Number, required:'{PATH} is required'},
    matchDate:{type:Date, required:'{PATH} is required', default:Date.now},
    matchTime:{type:Date, required:'{PATH} is required', default:Date.now},
    hideVs:{type:Boolean, default:false}
});

var Match = mongoose.model('Match', matchSchema);

exports.createDefault = function () {
    Match.find({}).exec(function (err, doc) {
        if(doc.length == 0){
            Match.create({
                teamOne:"0",
                teamTwo:"1",
                round:1,
                hideVs:{type:Boolean, default:false}
            })
        }
    })
};