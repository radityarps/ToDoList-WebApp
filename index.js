import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Title
const d = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuesday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let title = {
  dateOfToday:
    days[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate(),
  workList: "Work List",
};

//Items List
let itemsData = {
  todayData: [],
  workData: [],
};

app.get("/", (req, res) => {
  res.redirect("/todoay");
});

app.get("/todoay", (req, res) => {
  res.render("index.ejs", {
    title: title.dateOfToday,
    itemsData: itemsData.todayData,
    formAction: "/todoayForm",
    todoayActive: "var(--third-color)",
    worklistActive: "black",
  });
});

app.get("/worklist", (req, res) => {
  res.render("index.ejs", {
    title: title.workList,
    itemsData: itemsData.workData,
    formAction: "/worklistForm",
    todoayActive: "black",
    worklistActive: "var(--third-color)",
  });
});

app.post("/todoayForm", (req, res) => {
  let userInput = req.body.newItem;
  itemsData["todayData"].push(userInput);
  res.redirect("/todoay");
});

app.post("/worklistForm", (req, res) => {
  let userInput = req.body.newItem;
  itemsData["workData"].push(userInput);
  res.redirect("/worklist");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
