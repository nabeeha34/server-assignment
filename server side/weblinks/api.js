let express = require('express')
    router = express.Router(),
    methods = require('../utils/functions');


router.get('/calculate', async function(req,res){
    let result = await methods.calculate(req.query);
    res.send(result);
});

module.exports = router;
