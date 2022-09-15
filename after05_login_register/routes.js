const res = require('express/lib/response')

function getRoot(req, res) { res.send('OK MINMDEX') }

// LOGIN
function getLogin(req, res) {
    if(req.isAuthenticated()) {
        const user = req.user
        res.send(`User: ${user.name}`)
    } else {
        res.sendFile(__dirname + '/views/login.html')
    }
}
function postLogin(req, res) {
    const user = req.user
    res.send(`User: ${user.name}`)
}


// REGISTER
function getSignup(req, res) { res.sendFile(__dirname + '/views/signup.html') }
function postSignup(req, res) { 
    res.sendFile(__dirname + '/views/index.html')
}
function getFailSignup(req, res) {
    res.send('Fail Signup')
}

module.exports = {
    getRoot,
    getSignup,
    postSignup,
    getFailSignup,
    getLogin,
    postLogin
}