import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/todoay");
});

const d = new Date;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday"];
const month = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
let dateOfToday = days[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate();

app.get("/todoay", (req, res) => {
  res.render("index.ejs", {
    dateOfToday: dateOfToday,
  });
});

app.get("/worklist", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
