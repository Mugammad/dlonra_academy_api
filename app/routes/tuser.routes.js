const verifySignup = require('../middleware/verifySignup')
const controller = require('../controllers/tuser.controller')

module.exports = (app) => {
    app.post('/signup', verifySignup.checkDuplicateNameOrEmail, controller.signup);
    app.get('/users', controller.getUsers)
}