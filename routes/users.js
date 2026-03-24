const express = require('express');
const router = express.Router();


router.route('/').get((req, res) => {
    res.send('Users List');
}).post((req, res) => {
    const firstName = req.body.firstName;
const isValid = firstName !== "";
if (isValid) {
    console.log(`Adding user: ${firstName}`);
    users.push({ name: firstName });
    res.render('users/list', { users });
}   
else {
    console.log("Error adding user!");
    res.render('users/new', { firstName: firstName });
}
});
router.get('/list', (req, res) => {
    res.render('users/list', { users });
});
router.route('/:id.get').get((req, res) => {
    console.log(req.user);
    console.log('Getting user data!');
    res.send(`Getting User data for id: ${req.user['name']}`);
}).delete((req, res) => {
    res.send(`Deleting User data for id: ${req.params.id}`);
}).put((req, res) => {
    res.send(`Updating User data for id: ${req.params.id}`);
});

const users = [{ name: "George" }, { name: "Justyna" }];
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});
module.exports = router;