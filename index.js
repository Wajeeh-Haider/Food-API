const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());


// Filter products by categories
app.get("/products/:category" , (req,res)=> {
  const {category} = req.params;
  const filterFoodByCategories = data.filter((item => item.category == category ));
  res.send(filterFoodByCategories)
})


// Get a single food item by ID
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const food = data.find((food) => food.id === Number(id));
  res.send(food);
});


// Get all food items
app.get("/", (req, res) => {
  res.send(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
