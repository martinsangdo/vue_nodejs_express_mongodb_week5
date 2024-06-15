var express = require('express');
var router = express.Router();
const request = require('request');
var Todo = require('../models/Todo');


//this is rending the page without getting data from mongoDB
router.get('/list', function(req, res, next) {
    res.render('todo/list');
});
//this is the API to query the list
router.get('/read_list', function(req, res, next) {
    var todo = new Todo();
    todo.find(
        {},
        {limit: req.query.limit == null?10: req.query.limit},   //default is 10 item
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
