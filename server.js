import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const PORT = 3000;
const app =express();
const __filename = fileURLToPath(import.meta.url);







const __dirname = dirname(__filename);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



// Route for contact page
app.get("/contact", (res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Start the server
app.listen( PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
