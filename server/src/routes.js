const RegisterPolicy = require('./policies/RegisterPolicy')
const UserController = require('./controllers/UserController')
const TopicController = require('./controllers/TopicController')





module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send({status: 200})
    })
    app.get('/message', (req, res) => {
        console.log("this be a test arrr")
        res.send({status: 200, message: 'Hello!'})
    })

    app.post('/register', RegisterPolicy.register, UserController.register)
    app.post('/login', UserController.login)
    app.get('/users', UserController.getUsers)
    app.post('/users/setAdmin', UserController.setAdmin)
    app.post('/Topics/createTopic', TopicController.createTopic)
    app.get('/Topics/getTopics', TopicController.getTopics)
}
