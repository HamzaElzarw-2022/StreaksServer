const {Schema, model} = require('mongoose');

class streakObject 
{
  constructor(name, theme, roundUpdateTime) {

    this.name= name;
    this.theme= theme;

    this.count= 0;
    this.highestStreak = 0;
    this.numberOfAttempts = 1;
    this.dateCreated= new Date().toString();
    this.done= false;
    this.active= true;

    const day = new Date().getHours() >= roundUpdateTime ? new Date().getDate()+1 : new Date().getDate();
    this.roundEnd = new Date(new Date().getFullYear(), new Date().getMonth(), day, roundUpdateTime)

  }
}

const streakschema = new Schema({

    name: String,
    theme: Number,
    count: Number,
    highestStreak: Number,
    numberOfAttempts: Number,
    dateCreated: Date,
    done: Boolean,
    active: Boolean,
    roundEnd: Date,

})

const streak = model("streak", streakschema);

module.exports = {streak, streakObject};