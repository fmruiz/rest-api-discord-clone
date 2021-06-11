const express = require("express");
const app = express();
// arrays information
let groups = require("./groups.json");
let users = require("./users.json");

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// users route
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  // validation
  if (user) {
    res.json(user);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  // validation
  res.status(204).end();
});

// groups route
app.get("/api/groups", (req, res) => {
  res.json(groups);
});

app.get("/api/groups/:id", (req, res) => {
  res.json(groups);
});

// start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
