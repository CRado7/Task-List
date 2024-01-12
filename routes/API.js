const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path')

//GET Notes
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
})

//POST Note
router.post('/api/notes', (req, res) => {
    
    const jsonNote = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };

    jsonNote.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(jsonNote))
    res.json(jsonNote);
});

//Delete Note
router.delete('/api/notes/:id', (req, res) =>{
    const jsonNote = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    const deleteNote = jsonNote.filter(item => item.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote))
    res.json(deleteNote)
})
    module.exports = router;