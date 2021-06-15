const express = require("express");
let cors = require("cors");
const app = express();

app.use(cors());

// enviroment var
require("dotenv/config");

// arrays information
let groups = require("./groups.json");
let users = require("./users.json");
let textChannels = require("./textChannels.json");
let voiceChannels = require('./voiceChannels.json')

// JSON Parser
app.use(express.json());

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
  res.status(204).end();
});

app.post("/api/users", (req, res) => {
  const user = req.body;
  const ids = users.map((user) => user.id);
  const maxId = Math.max(...ids);
  const newUser = {
    id: maxId + 1,
    name: user.name,
    isAdmin: user.isAdmin,
    isBot: user.isBot,
  };
  users = [...users, newUser];
  res.json(newUser);
});

// groups route
app.get("/api/groups", (req, res) => {
  res.json(groups);
});

app.get("/api/groups/:id", (req, res) => {
  const id = Number(req.params.id);
  const group = groups.find((group) => group.id === id);
  // validation
  if (group) {
    res.json(group);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/groups/:id", (req, res) => {
  const id = Number(req.params.id);
  groups = groups.filter((group) => group.id !== id);
  res.status(204).end();
});

app.post("/api/groups", (req, res) => {
  const group = req.body;
  const ids = groups.map((group) => group.id);
  const maxId = Math.max(...ids);
  const newGroup = {
    id: maxId + 1,
    nameGroup: group.nameGroup,
  };
  groups = [...groups, newGroup];
  res.json(newGroup);
});

// text channels route
app.get("/api/text-channels", (req, res) => {
  res.json(textChannels);
});

// voice channels route
app.get("/api/voice-channels", (req, res) => {
  res.json(voiceChannels);
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
