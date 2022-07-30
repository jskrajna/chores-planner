import express from "express";
import { Chore } from "../models/chore.js"
import { User } from "../models/user.js"

const router = express.Router();

// chores

router.get('/chores', function(req, res, next) {
    Chore.find({}).then(function(chores) {
        res.send(chores);
    }).catch(next);
})

router.post('/chores', function(req, res, next){
    Chore.create(req.body).then(function(chore) {
        res.send(chore);
    }).catch(next);
});

router.put('/chores/:id', function(req, res, next){
    Chore.findOneAndUpdate({_id: req.params.id}, req.body).then(function(chore) {
            res.send(chore);
        })
    }
)

router.delete('/chores/:id', function(req, res){
    Chore.findOneAndDelete({_id: req.params.id}).then(function(chore){
        res.send(chore);
    });
});

// user
router.get('/users', function(req, res, next) {
    User.find({}).then(function(users) {
        res.send(users);
    }).catch(next);
})

router.post('/users', function(req, res, next){
    User.create(req.body).then(function(user) {
        res.send(user);
    }).catch(next);
});

router.put('/users/:id', function(req, res, next){
    User.findOneAndUpdate({_id: req.params.id}, req.body).then(function(user) {
            res.send(user);
        })
    }
)

router.delete('/users/:id', function(req, res){
    User.findOneAndDelete({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});


export {router}