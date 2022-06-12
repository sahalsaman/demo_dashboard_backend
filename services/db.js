// import mongoose
const mongoose=require('mongoose')

// connect db
mongoose.connect('mongodb://localhost:27017/stunntech',{
    useNewUrlParser:true
})

// create model
const Job=mongoose.model('Job',{
    jobId: String,
    jobName: String,  
    date: String, 
    budjet: String,
    required:Number,
    hired:Number,
    applicants:Number
})

module.exports={
    Job
}