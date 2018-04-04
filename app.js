var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    flash           = require("connect-flash");
    
//routes
var mainRoutes      = require("./routes/restuarant");
    
app.use(flash());
mongoose.connect("mongodb://localhost/chinese_restaurant");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//use routes
app.use(mainRoutes);
//===========================================END CONFIGURATION SETUP==========================================================



app.listen(process.env.PORT, process.env.IP, () => console.log("Chinese Restaurant server has started successfully"));
