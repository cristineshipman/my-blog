var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();



mongoose.connect("mongodb://localhost/my_blog");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//title
//image
//body
//created

app.get("/", function(req, res){
  res.render("home");
});

app.listen(3000, function(){
  console.log("magic is happening")
});
