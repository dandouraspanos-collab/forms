const express = require('express');
const router = express.Router();


router.route('/').get((req, res) => {
    res.send('User List');
}).post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;

    const isValid = 
    firstName !=="" && 
    lastName !=="" && 
    gender !=="" && 
    age !=="";

        if(isValid){
            console.log(`Adding user: ${firstName} ${lastName}`);
            users.push({firstName, lastName, gender, age});
            res.render('users/list', {users});
        }
        else{
            console.log('Error adding user!');
            res.render('users/new', {firstName:firstName, lastName:lastName, gender:gender, age:age});
        }     
});
router.get('/list', (req, res) => {
    res.render('users/list', {users});
});
router.get('/new', (req, res) => {
    res.render('users/new', {firstName:''})
});
//  router.get('/:id', (req, res) => {
    //     res.send(`Getting User Data for ID: ${req.params.id}`);
    // });
router.route('/:id').get((req, res)=>{
    console.log(req.user);
    console.log('Getting user data!');

    if (!req.user) {
        return res.send('User not found');
    }

    res.render('users/id', {user: req.user, id: req.params.id});
}).delete((req, res)=>{
    res.send(`Deleting User data for id: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating User data for id: ${req.params.id}`);
});

const users = [{firstName:"Panos", lastName:"Dandouras", gender:"Male", age:20}, 
    {firstName:"Stavros", lastName:"Dandouras", gender:"Male", age:18}];
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router;
 