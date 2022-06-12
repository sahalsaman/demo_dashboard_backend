const express=require('express')
const cors=require('cors')
const dataService=require("./services/data.services")



const app=express()

//parse json data
app.use(express.json())

app.use(cors({
    origin:"http://localhost:4200"
}))


app.post("/addJob",(req,res)=>{
    dataService.addJob(req.body.jobId,req.body.jobName,req.body.date,
        req.body.budjet,req.body.required,req.body.hired,req.body.applicants).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/updateHiring',(req,res)=>{
    dataService.updateHiring(req.body.jobId,req.body.required,req.body.hired,req.body.applicants).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.post('/viewJobs',(req,res)=>{
    dataService.viewJobs().then(result=>{
        res.status(result.statusCode).json(result)
    })
})


app.delete('/deleteJob/:jobid',(req,res)=>{
    dataService.deleteJob(req.params.jobid).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen(3000,()=>{
    console.log("server started at 3000")
    
})