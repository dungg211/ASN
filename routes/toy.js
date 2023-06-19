var express = require('express');
const ToyModels = require('../models/ToyModels');
var router = express.Router();

router.get('/', async (req, res) => {
    var toy_list = await ToyModels.find({})
    res.render('toy/index', { toys : toy_list})
})
router.get('/list', async (req, res) => {
    var toy_list = await ToyModels.find({})
    res.render('toy/list', { toys: toy_list })
 })
router.get('/add', (req, res) => {
    res.render('toy/add');
 })
 
 router.post('/add', async (req, res) => {
    var toy = req.body;
    await ToyModels.create(toy)
    .then(() => { console.log ("Add new movie succeed !")});
    res.redirect('/toy');
 })
 router.get('/delete/:id', async(req, res) => {
    await ToyModels.findByIdAndDelete(req.params.id)
    .then(() => { console.log ('Delete movie succeed !')});
    res.redirect('/toy');
 })
 router.get("/edit/:id", (req, res) => {
   ToyModels.findById(req.params.id, (err, data) => {
     if (!err) {
        res.render("toy/edit", { toys: data })
     }
   })
})
router.post("/edit/:id", (req, res) => {
    ToyModels.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (!err) {
        console.log("edit toy succeed !")
        res.redirect("/toy")
      }
    })
})
router.post('/detail', async (req, res) => {
   var id = req.body.id;
   var toys = await ToyModels.findById(id);
   res.render("toy/detail", { toys : toys })
})
router.post('/search', async (req, res) => {
   var keyword = req.body.title;
   var toys = await ToyModels.find({ title: new RegExp(keyword, "i")})
   res.render('toy/list', { toys: toys })
})
module.exports = router;