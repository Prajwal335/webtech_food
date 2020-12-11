const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//const _ = require("lodash");
const cors = require("cors");

const app = express();


app.use(cors());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/foodsDB", {
  useNewUrlParser: true
});


const foodSchema = new mongoose.Schema({
  name: String,
  value: String,
  price: Number,
  time: Number,
  stars: Number
});




const Food = mongoose.model("Food", foodSchema);

const food1 = new Food({
  name: "greeceSalad",
  value: "GreeceSalad",
  price: 130,
  time: 25,
  stars: 5
});
//food1.save()

const food2 = new Food({
  name: "pastaSalad",
  value: "PastaFarfalleSalad",
  price: 145,
  time: 30,
  stars: 5
});
//food2.save()

const food3 = new Food({
  name: "chickenSkewers",
  value: "ChickenSkewers",
  price: 150,
  time: 50,
  stars: 5
});
//food3.save()

const food4 = new Food({
  name: "bakedChicken",
  value: "BakedChicken",
  price: 200,
  time: 40,
  stars: 4.5
});
//food4.save()

const food5 = new Food({
  name: "pizza",
  value: "Pizza",
  price: 220,
  time: 31,
  stars: 4.5
});
//food5.save()

const food6 = new Food({
  name: "chickenCurry",
  value: "ChickenCurry",
  price: 149,
  time: 37,
  stars: 4
});
//food6.save()

const food7 = new Food({
  name: "parata",
  value: "Paratha",
  price: 75,
  time: 46,
  stars: 4
});
//food7.save()


const food8 = new Food({
  name: "hamburger",
  value: "Hamburger",
  price: 150,
  time: 34,
  stars: 4
});
//food8.save()

const food9 = new Food({
  name: "ravaIdli",
  value: "RavaIdli",
  price: 70,
  time: 30,
  stars: 4
});
//food9.save()

const food10 = new Food({
  name: " chickenPizza",
  value: "ChickenPizza",
  price: 300,
  time: 45,
  stars: 5
});
//food10.save()

const food11 = new Food({
  name: "frenchFries",
  value: "FrenchFries",
  price: 70,
  time: 30,
  stars: 3.5
});
//food11.save()

const food12 = new Food({
  name: "masalaDosa",
  value: "MasalaDosa",
  price: 60,
  time: 35,
  stars: 4
});
//food11.save()

const food13 = new Food({
  name: "puliyogare",
  value: "Puliyogare",
  price: 70,
  time: 50,
  stars: 5
});

const food14 = new Food({
  name: "sandwich",
  value: "Sandwich",
  price: 65,
  time: 25,
  stars: 4.5
});

const food15 = new Food({
  name: "chickenBiriyani",
  value: "ChickenBiriyani",
  price: 200,
  time: 40,
  stars: 5
});

const food16 = new Food({
  name: "dooneBiriyani",
  value: "DooneBiriyani",
  price: 180,
  time: 40,
  stars: 4.5
});

const food17 = new Food({
  name: "masalaDosa",
  value: "MasalaDosa",
  price: 60,
  time: 35,
  stars: 4
});

const food18 = new Food({
  name: "idliVoda",
  value: "IdliVoda",
  price: 55,
  time: 36,
  stars: 4
});

const food19 = new Food({
  name: "rotiPanir",
  value: "RotiPanir",
  price: 65,
  time: 38,
  stars: 4
});

const food20 = new Food({
  name: "choleBhature",
  value: "CholeBhature",
  price: 60,
  time: 50,
  stars: 4.5
});

const food21 = new Food({
  name: "puriSagu",
  value: "PuriSagu",
  price: 58,
  time: 30,
  stars: 3.5
});



const detailSchema = new mongoose.Schema({
  name: String,
  phNo: Number,
  location:String,
  quantity:Number,
  food:String
});



const Detail = mongoose.model("Detail", detailSchema);


const detail1 = new Detail({
  name: "Prajwal",
  phNo: 9789654412,
  location:"Hassan",
  quantity:1,
  food:"Pasta"
});

//detail1.save()


const defaultItems = [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12,food13,food14,food15,food16,food17,food18,food19,food20,food21];


app.get("/", function(req, res) {

  Food.find({}, function(err, foundItems) {

    if (foundItems.length === 0) {
      Food.insertMany(defaultItems, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully savevd default items to DB.");
        }
      });
      res.redirect("/");
    } else {
      res.sendFile(__dirname + "/index.html");
    }

  });

});


app.get("/order", function(req, res) {
  res.sendFile(__dirname + "/order.html");
});

app.get("/view",function(req,res){
   res.render("food");
});

app.post("/view", function(req, res) {

  var obj = req.body;

  for (let key in obj) {
    var imgName = key;
    var foodName = obj[key];
  }

  Food.findOne({name: imgName}, function(err, food){
   if (err){
          console.log(err);
     } else {
          console.log(food.price);
         var time = food.time;
         var price = food.price;
         var stars = food.stars;
         var imgName = food.name;
         var foodName = food.value;


           res.render("food", {
             foodKey: imgName,
             foodImg: "images/" + imgName + ".jpg",
             foodName: foodName,
             foodTime: time,
             foodPrice: price,
             foodStars: stars
           });
     }
   });



});




app.post("/price", function(req, res) {

  var obj = req.body;

  for (let key in obj) {
    var imgName = key;
    var foodName = obj[key];
  }

  Food.findOne({name: imgName}, function(err, food){
   if (err){
          console.log(err);
     } else {
         var time = food.time;
         var price = food.price;
         var stars = food.stars;
         var imgName = food.name;
         var value = food.value;

        //console.log(food);
         res.render("price", {
           foodName: imgName,
           foodPrice: price,
           foodValue:value
         });

     }
   });


});



app.post("/calPrice",function(req,res){

  var obj = req.body;

  var name = req.body.fname;
  var phNo = parseInt(req.body.phNo);
  var location = req.body.location;
  var quantity = parseInt(req.body.quantity);
  var food = req.body.food;

  //console.log(food);



  Food.findOne({name: food}, function(err, food){
   if (err){
          console.log(err);
     } else {
         var time = food.time;
         var price = food.price;
         var stars = food.stars;
         var imgName = food.name;
         var value = food.value;

        const totalPrice = (price*quantity) + 30 ;

        res.render("calPrice", {
          foodName: imgName,
          foodPrice: price,
          foodValue:value,
          foodTotal:totalPrice,
          phNo:phNo,
          fname:name,
          location:location,
          quantity:quantity
        });

     }
   });


});



app.post("/final",function(req,res){

    const name = req.body.fname;
    const phNo = parseInt(req.body.phNo);
    const location = req.body.location;
    const quantity = parseInt(req.body.quantity);
    const food = req.body.food;


  const detail1 = new Detail({
    name: name,
    phNo: phNo,
    location:location,
    quantity:quantity,
    food:food
  });

  detail1.save()

  res.render("final",{fName:name, phNo:phNo, location:location, foodName:food});

});



app.post("/message", function(req, res) {

       res.render("message");
});



app.listen(3000, function() {
  console.log("Server successfully running in the port 3000");
});











/*
const foodDetails = {
  greeceSalad: {
    name: "greeceSalad",
    value: "GreeceSalad",
    price: 130,
    time: 25,
    stars: 5
  },
  pastaSalad: {
    name: "pastaSalad",
    value: "PastaFarfalleSalad",
    price: 145,
    time: 30,
    stars: 5
  },
  chickenSkewers: {
    name: "chickenSkewers",
    value: "ChickenSkewers",
    price: 150,
    time: 50,
    stars: 5
  },
  bakedChicken: {
    name: "bakedChicken",
    value: "BakedChicken",
    price: 200,
    time: 40,
    stars: 4.5
  },
  pizza: {
    name: "pizza",
    value: "Pizza",
    price: 220,
    time: 31,
    stars: 4.5
  },
  chickenCurry: {
    name: "chickenCurry",
    value: "ChickenCurry",
    price: 149,
    time: 37,
    stars: 4
  },
  parata: {
    name: "parata",
    value: "Paratha",
    price: 75,
    time: 46,
    stars: 4
  },
  hamburger: {
    name: "hamburger",
    value: "Hamburger",
    price: 150,
    time: 34,
    stars: 4
  },
  ravaIdli: {
    name: "ravaIdli",
    value: "RavaIdli",
    price: 70,
    time: 30,
    stars: 4
  },
  chickenPizza: {
    name: " chickenPizza",
    value: "chickenPizza",
    price: 300,
    time: 45,
    stars: 5
  },
  frenchFries: {
    name: "frenchFries",
    value: "FrenchFries",
    price: 70,
    time: 30,
    stars: 3.5
  },
  masalaDosa: {
    name: "masalaDosa",
    value: "MasalaDosa",
    price: 60,
    time: 35,
    stars: 4
  }

}

*/
