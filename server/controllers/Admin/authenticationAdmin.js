// const express = require("express");
// const { Sequelize } = require("sequelize");
// const jwt = require("jsonwebtoken");
// const sequelize = require("../../database/configdb"); // Import your sequelize instance
// const Admin = require("../../database/models/admin")(sequelize); // Call the Admin function and pass the sequelize instance

// const app = express();

// // Secret key used for signing and verifying tokens
// const secretKey = "121215";

// // Middleware function to authenticate admin user
// const authenticateAdmin = (req, res, next) => {
//   // Extract the token from the request headers
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   // Verify the token
//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     // Check if the decoded token has admin role
//     if (decoded.role !== "admin") {
//       return res.status(403).json({ message: "Unauthorized" });
//     }

//     // Admin is authenticated, pass control to the next middleware or route handler
//     next();
//   });
// };

// // Login route
// app.post("/admin/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Find the admin by username
//     const admin = await Admin.findOne({ where: { username } });

//     if (!admin || admin.password !== password) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { id: admin.id, username: admin.username, role: "admin" },
//       secretKey
//     );

//     // Send the token as a response
//     res.json({ token });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Protected admin route
// app.get("/admin/dashboard", authenticateAdmin, (req, res) => {
//   // Route handler for the admin dashboard
//   res.json({ message: "Welcome to the admin dashboard!" });
// });
// app.listen(3000, function () {
//   console.log("listening on port ");
// });
