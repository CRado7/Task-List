//Dependancies
const router = require('express').Router();
const path = require('path');

//Request Routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//Module Export Name
module.exports = router;
