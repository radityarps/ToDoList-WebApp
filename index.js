import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Title
const d = new Date;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
let title = {
  "dateOfToday" :days[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate(),
"workList" : "Work List",
};

//Items List

app.get("/", (req, res) => {
  res.redirect("/todoay");
});

app.get("/todoay", (req, res) => {
  res.render("index.ejs", {
    title: title.dateOfToday,
  });
});

app.get("/worklist", (req, res) => {
  res.render("index.ejs",{
    title: title.workList,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
