var express = require('express');
const Toy2Models = require('../models/Toy2Models');
var router = express.Router();

router.get('/', async (req, res) => {
    var toy2_list = await Toy2Models.find({})
    res.render('toy2/index', {toys2 : toy2_list})
})
router.get('/list', async (req, res) => {
    var toy2_list = await Toy2Models.find({})
    res.render('toy2/list', { toys2: toy2_list })
 })
router.get('/add', (req, res) => {
    res.render('toy2/add');
 })
  router.post('/add', async (req, res) => {
    var toy = req.body;
    await Toy2Models.create(toy)
    .then(() => { console.log ("Add new movie succeed !")});
    res.redirect('/toy2');
 })
  router.get('/delete/:id', async(req, res) => {
    await Toy2Models.findByIdAndDelete(req.params.id)
    .then(() => { console.log ('Delete movie succeed !')});
    res.redirect('/toy2');
 })
 router.get("/edit/:id", (req, res) => {
   Toy2Models.findById(req.params.id, (err, data) => {
     if (!err) {
        res.render("toy2/edit", { toys2: data })
     }
   })
})
router.post("/edit/:id", (req, res) => {
    Toy2Models.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (!err) {
        console.log("edit toy succeed !")
        res.redirect("/toy2")
      }
    })
})
router.post('/detail', async (req, res) => {
   var id = req.body.id;
   var toys = await Toy2Models.findById(id);
   res.render("toy2/detail", { toys : toys })
})
router.post('/search', async (req, res) => {
   var keyword = req.body.title;
   var toys = await Toy2Models.find({ title: new RegExp(keyword, "i")})
   res.render('toy2/list', { toys2: toys })
})
module.exports = router;