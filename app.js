const express = require("express");
const app = express();
const path = require("path");

// Set the directory for static files
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Sample product data
const products = [
  {
    id: 1,
    name: "Kaliper Off Road",
    description: "Description of Kaliper Off Road",
    image: "/images/product/product1.png",
  },
  {
    id: 2,
    name: "master rem",
    description: "Description of master rem",
    image: "/images/product/product2.png",
  },
  {
    id: 3,
    name: "Kampas Rem",
    description: "Description of Kampas Rem",
    image: "/images/product/product3.png",
  },
  {
    id: 4,
    name: "selang rem",
    description: "Description of selang rem",
    image: "/images/product/product4.png",
  },
  {
    id: 5,
    name: "Velg HSR",
    description: "Description of Velg HSR",
    image: "/images/product/product5.png",
  },
  {
    id: 6,
    name: "Shock Ohlins",
    description: "Description of Shock Ohlins",
    image: "/images/product/product6.png",
  },
  // Add more products as needed
];

// Define a route
app.get("/", (req, res) => {
  res.render("index", {
    title: "AutoGANG",
    message: "Welcome to the Slider!",
    products: products, // Pass products data to the view
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
