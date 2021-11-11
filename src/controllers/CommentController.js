const Comment = require('../models/CommentModel');

//Read all comment
exports.ReadAllComment = (req, res) => {
    res.json({message: 'Liste de tout les comentaires'});
}
// Create comment
exports.CreateAComment = (req, res) => {
   
    let newcomment = new Comment(req.body);

    newcomment.save((error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            res.json(comment);
        }
    });
}
//Read one comment
exports.ReadAComment = (req, res) => {
    Comment.findById(req.params.comment_id, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comment);
        }
    });
}
//Update 
exports.UpdateAComment = (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, {new: true}, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comment);
        }
    });
}


exports.DeleteAComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.comment_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Le commentaire a bien été supprimé"});
        }
    });
}




















