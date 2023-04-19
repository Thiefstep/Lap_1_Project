function logger(req, res, next) {

    const port = 3000
    
    console.log(req.method, req.originalUrl);
    next();

}

module.exports = logger;
