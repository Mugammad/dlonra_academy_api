const db = require('../models');
const User = db.tuser;

exports.signup = async (req, res) => {
    User.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email
    }).then(() => {
        res.status(200).json({message: 'user registered successfully!'})
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json({users});
}