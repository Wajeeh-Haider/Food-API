const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const food = data.find((food) => food.id === Number(id));
  res.send(food);
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((food) => food.id === Number(id));
  if (index !== -1) {
    const updatedFood = { ...data[index], ...req.body };
    data[index] = updatedFood;
    res.send(`Food with ID ${id} updated`);
  } else {
    res.status(404).send(`Food with ID ${id} not found`);
  }
});

app.patch("/:id", (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((food) => food.id === Number(id));
  if (index !== -1) {
    const updatedFood = { ...data[index], ...req.body };
    data[index] = updatedFood;
    res.send(`Food with ID ${id} updated`);
  } else {
    res.status(404).send(`Food with ID ${id} not found`);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
