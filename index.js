console.log("kooi");
const express = require("express");
const fs = require("fs/promises");
const app = express();
const bodyParser = require("body-parser");
//const { text } = require("body-parser");
const pas = "g";
const username = "u1";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/a", async (_, res) => {
  try {
    const content = await fs.readFile('C:/Users/halid/OneDrive/Desktop/clip.txt', { encoding: 'utf8' });
    const data = await fs.readFile("./index.html", { encoding: "utf8" });
    res.send(data  + content + '</pre></body></html>');

    //console.log(data);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});
app.post("/a", async (req, res) => {
  console.log(req.body);

  try {
    const data = await fs.appendFile(
      "C:/Users/halid/OneDrive/Desktop/clip.txt",
      req.body.text+"\n\n",
      { encoding: "utf8" }
    );
    res.redirect('/a');

  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.listen(3000, () => {
  console.log("app start listening 3000");
});
