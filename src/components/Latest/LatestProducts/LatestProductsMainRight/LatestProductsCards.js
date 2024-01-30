// // server.js
// const express = require("express");
// const app = express();
// const port = 3001; 

// const productsDatabase = [
//   {
//     index: "1",
//     type: "sneakers",
//     img: "/BackImg/sneacker1.webp",
//     desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
//     price: 150,
//   },
//   {
//     index: "2",
//     type: "sneakers",
//     img: "/BackImg/sneacker2.webp",
//     desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
//     price: 150,
//   },
//   {
//     index: "3",
//     type: "sneakers",
//     img: "/BackImg/sneacker3.webp",
//     desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
//     price: 150,
//   },

//   {
//     index: "4",
//     type: "sneakers",
//     img: "/BackImg/sneacker4.webp",
//     desc: "Product 50 Description",
//     price: 200,
//   },
//   {
//     index: "5",
//     type: "sneakers",
//     img: "/BackImg/sneacker5.webp",
//     desc: "Product 50 Description",
//     price: 200,
//   },
//   {
//     index: "6",
//     type: "sneakers",
//     img: "/BackImg/sneacker1.webp",
//     desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
//     price: 150,
//   },
// ];

// app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// app.get("/products", (req, res) => {
//   res.json(productsDatabase);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
