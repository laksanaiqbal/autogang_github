const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

// Data produk untuk rendering
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
];

// Path ke template
const templatePath = path.join(__dirname, "views", "index.ejs");

// Render template ke HTML
ejs.renderFile(
  templatePath,
  { title: "AutoGANG", message: "Welcome to the Slider!", products: products },
  (err, str) => {
    if (err) {
      console.error(err);
      return;
    }
    // Tulis hasil HTML ke file
    fs.writeFileSync(path.join(__dirname, "public", "index.html"), str);
  }
);
