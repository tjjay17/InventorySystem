const router = require('express').Router();

router.get('/helloThere', function (req,res){
    console.log('hello');
    res.send('works')
});

module.exports = router;
