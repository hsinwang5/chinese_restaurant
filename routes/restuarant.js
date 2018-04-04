var express = require("express"),
    router = express.Router();
    
//index route    
router.get("/", function(req, res){
    res.render("main/index"); 
});

module.exports = router;