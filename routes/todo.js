var express = require('express');
var router = express.Router();
const request = require('request');
var Todo = require('../models/Todo');


/* GET todo listing. */
router.get('/list', function(req, res, next) {
    var todo = new Todo();
    todo.find(
        {},
        {limit:10},
        '',
        {},
        function(results){
            // console.log(results);
            res.render('todo/list', { list: results['data'] });
        });
});
//POST request
router.post('/create_new', function(req, res, next) {
    var movie = new Movie();
    movie.create(
        {
            "title": req.body['title'],
            "year": req.body['year']
        },
        function(results){
            // console.log(results);
            res.json(results);
        });
});
//PUT request
router.put('/update_me', function(req, res, next) {
    var movie = new Movie();
    movie.update(
        {_id: req.body['_id']},
        {year: req.body['year']},
        function(results){
            // console.log(results);
            res.json(results);
        });
});

module.exports = router;
