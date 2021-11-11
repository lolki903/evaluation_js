


const commentController = require('../controllers/CommentController');

module.exports = (server) => {
    server.route("/comments")
    .get(commentController.ReadAllComment) // Get all comments
    .post(commentController.CreateAComment); // Create a comment
    
    server.route("/comments/:comment_id") // req.params.comment_id
    .get(commentController.ReadComment) // Get one comments
    .put(commentController.UpdateAComment) // Update one comment
    .delete(commentController.DeleteAComment); // Delete one comment
}