import express from "npm:express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(8080,()=>console.log('hola on port 8000'))
