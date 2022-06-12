const db = require('./db')



const addJob = (jobId, jobName, date, budjet, required, hired, applicants) => {

  return db.Job.findOne({ jobId }).then(
    job => {
      if (job) {
        //  existing user
        return {
          statusCode: 401,
          status: false,
          messege: "already created!!"
        }
      } else {
        const newJob = new db.Job({
          jobId,
          jobName,
          date,
          budjet,
          required,
          hired,
          applicants
        })
        newJob.save()
        // console.log("dfe" + jobId + jobName + date + budjet)
        return {
          statusCode: 200,
          status: true,
          messege: "successfully created.."
        }
      }
    }
  )

}

(
  { "Employeeid": 1 },
  { $set: { "EmployeeName": "NewMartin" } })

const updateHiring = (jobId, required, hired, applicants) => {
  return db.Job.updateOne({ "jobId": jobId },
    {
      $set: {
        "required": required,
        "hired": hired,
        "applicants": applicants
      }
    }).then(job => {
      if (job) {
        return {
          statusCode: 200,
          status: true,
          message: "successfully updates "
        }
      } else {
        return {
          statusCode: 401,
          stats: false,
          message: "invalid credentiol"
        }
      }
    })
}


const viewJobs = () => {
  return db.Job.find({}).then(jobs => {
    if (jobs) {
      return {
        statusCode: 200,
        stats: true,
        jobs
      }
    } else {
      return {
        statusCode: 401,
        stats: false,
        message: "invalid credentiol"
      }
    }
  })
}


const deleteJob = (jobid) => {
  return db.Job.deleteOne({ jobid }).then(result => {
    if (!result) {
      return {
        statusCode: 401,
        status: false,
        message: "invalid credentiol"
      }
    } else {
      return {
        statusCode: 200,
        status: true,
        message: "successfully deleted account"
      }
    }
  })
}


module.exports = {
  addJob,
  updateHiring,
  viewJobs,
  deleteJob
}