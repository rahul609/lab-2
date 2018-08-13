const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Lab 2',
        message: 'welcome To Lab 2',

    });
});

/* GET Rahul */
router.get('/rahul', (req, res, next) => {
    res.render('Rahul', {
        title: 'Profile',
        name: 'Name: Rahul Chopra',
        age: 'Age: 19',
        program: 'Program: Interactive Media and Design Web',
        bio: 'About: I am from Ludhiana india and i have done web designing for two years. My hobbies are playing volleyball.',
    });
});

/* GET Aviral */
router.get('/aviral', (req, res, next) => {
    res.render('Aviral', {
        title: 'Profile',
        name: 'Name: Aviral Masson',
        age: 'Age: 21',
        program: 'Program: Interactive Media and Design Web',
        bio: 'About: I am from Punjab and i have been into computer field for three years. My hobbies are playing video games and working on my car. ',
    });
});

/* GET Hemant */
router.get('/hemant', (req, res, next) => {
    res.render('hemant', {
        title: 'Profile',
        name: 'Name: Hemant Dhiman',
        age: 'Age: 22',
        program: 'Program: Interactive Media and Design Web',
        bio: 'About: I am from delhi and i am good at mechanical skills. '
    });
});


module.exports = router;
