// server.js
// A minimal Node.js server using Express to serve static files.
// This file is required because app.yaml specifies a Node.js runtime.

// Import the Express library.
// Make sure to add "express" to your package.json dependencies:
// "dependencies": { "express": "^4.18.2" }
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080; // App Engine typically provides the port via process.env.PORT

// Serve static files from the current directory.
// This makes your index.html, CSS, and JavaScript files available.
app.use(express.static(path.join(__dirname, "")));

// For single-page applications (SPAs) with client-side routing:
// This sends `index.html` for any request that isn't a static file.
// This is important for handling deep links within your SPA.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Quiz app listening on port ${port}`);
});
