import mongoose from './index.js';

const mentorSchema = new mongoose.Schema({
    mentorName:{type:String,required:["Mentor Name Is required"]}
},

{
    versionKey:false
})

const mentorModel = mongoose.model("mentors",mentorSchema)

export default mentorModel