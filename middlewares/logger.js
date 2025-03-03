const logger = (req, res, next) => {
    // do whatever this middleware function should do
    console.log(`Request info: ${req.method} ${req.url}`)
    // call the next function
    next()
}

module.exports = logger