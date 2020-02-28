
module.exports =  
  function errHandler(err, req, res, next) {
    let errors = []
    let status = 500
    
    if (err.name == "SequelizeValidationError" ||
        err.name == "SequelizeUniqueConstraintError"
    ) status = 400
    else if (
      err.name == "LoginError" || 
      err.name == "AuthenticationError" ||
      err.name == "AthorizationError" ||
      err.name == "ItemCannotBeFound"
      ) status = err.status
    
    if(err.errors) {
      err.errors.forEach(error => {
        errors.push(error.message)
      })
    } else errors.push(err.message)
    console.log(err)
    res.status(status).json({errors})
    
  }