const users = require('../models/UserModel');

//All user
exports.ReadAllUsers = (req, res) => {
    users.find({}, (error, posts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.end({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(users);
        }
    });
}
//Create user
exports.CreateAUser = async (req, res) => {
    let newUser = new User(req.body);

    newUser.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        } else {
            try {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const user = { name: req.body.name, password: hashedPassword };
                users.push(user);
                res.status(201).send();
            }
        finally{
            
        }}
    });
}
//Read one user
exports.LoginAUser = async (req, res) => {
    user.findById(req.params.user_id, (error, user) => {
        const user = users.find(user => user.name = req.body.name)
        if (user == null) {
            return res.status(400).send ('L\'utilisateur n\'existe pas' ) 
        }
        else {
            try{
                if(await bcrypt.compare(req.body.password, user.password)) {
                  res.send('C\'est bon !')
                } else {
                    res.send('Pas le bon mot de passe !')
                }
              }
        finally{

        }}
    });
}
exports.DeleteAUser = async (req, res) =>{
    users.findByIdAndDelete(req.params.user_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json({message: "L'utilisateur a bien été supprimé"});
        }
    });
}
