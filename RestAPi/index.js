const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000

// Routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

//      RESTAPI
app.get("/api/users", (req, res) => {
    return res.json(users);
})

// Dynamically rendering single object from array.
app
.route("/api/users/:id")
.get( (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req, res) => {
    // EDit user with id
    return res.json({ status: "Pending" });
}) 
.delete((req, res) => {
    // Delete user with id
    return res.json({ status: "Pending" });
});


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))