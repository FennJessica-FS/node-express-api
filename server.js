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

// helper to make sure the id in the URL is a real positive number
function getValidId(idParam) {
  const id = Number(idParam);

  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET one user by id
app.get("/users/:id", (req, res) => {
  const id = getValidId(req.params.id);

  if (!id) {
    return res.status(400).json({ message: "ID must be a positive number" });
  }

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found", id });
  }

  res.status(200).json(user);
});

// POST create a new user
app.post("/users", (req, res) => {
  const name = req.body.name;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;

  const newUser = { id: newId, name: name.trim() };
  users.push(newUser);

  res.status(201).json({ message: "User created", user: newUser });
});

// PUT update a user by id
app.put("/users/:id", (req, res) => {
  const id = getValidId(req.params.id);

  if (!id) {
    return res.status(400).json({ message: "ID must be a positive number" });
  }

  const name = req.body.name;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ message: "Name is required" });
  }

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found", id });
  }

  user.name = name.trim();

  res.status(200).json({ message: "User updated", user });
});

// DELETE a user by id
app.delete("/users/:id", (req, res) => {
  const id = getValidId(req.params.id);

  if (!id) {
    return res.status(400).json({ message: "ID must be a positive number" });
  }

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found", id });
  }

  const deletedUser = users.splice(index, 1)[0];

  res.status(200).json({ message: "User deleted", user: deletedUser });
});

// catch all for bad routes (helps with error handling points)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// use PORT if it's set, otherwise go ahead and default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
