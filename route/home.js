const Route = require("express").Router();

const authUser = require("../middleware/auth");

Route.get("/home", authUser, (req, res) => {
  return res.json({ message: "welcome to home Route", header:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vitae aliquid, maiores, veritatis temporibus accusamus voluptatem voluptatum quam fugit quod aut mollitia eum necessitatibus. Ad sunt perferendis velit nam eum!"});
});

module.exports = Route;


// Route.route("/")
// .get(tours)
// .post(tourUpdate);
// Route.route("/:id").get()

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmVlMzY5NDAxYWMzMTVhMTQ3NzhhODciLCJpYXQiOjE2NTk3OTA1NTh9.nmOIlmtbLstMI-8PhWrB8Gsz8N3krwzDMeCzXkAwDZU

// change on the auth route header(usertoken) to header('usertoken') $ home route rse to res