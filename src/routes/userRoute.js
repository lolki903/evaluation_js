const userController = require('../controllers/UserController');

module.exports = (server) => {
    server.route("/users")
    .get(userController.ReadAllUsers) // Get all users
    .post(userController.CreateAUser); // Create a user
    
    server.route("/users/:user_id") // req.params.user_id
    .get(userController.LoginAUser) // Get one user
    .delete(userController.DeleteAUser) // Update one post
}