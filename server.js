const express = require("express");
const app = express();

app.use(express.json());

// simple check so I know the server is running
app.get("/", (req, res) => {
  res.status(200).send("Service is up");
});

// in memory data (this resets when the server restarts)
let users = [
  { id: 1, name: "Jess Fenn" },
  { id: 2, name: "Alex Trebek" },
];

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET one user by id
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found", id });
  }

  res.status(200).json(user);
});

// POST create a new user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newId, name };
  users.push(newUser);

  res.status(201).json({ message: "User created", user: newUser });
});

// PUT update a user by id
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found", id });
  }

  user.name = name;

  res.status(200).json({ message: "User updated", user });
});

// DELETE a user by id
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found", id });
  }

  const deletedUser = users.splice(index, 1)[0];

  res.status(200).json({ message: "User deleted", user: deletedUser });
});

// use PORT if it's set, otherwise default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
