const express = require("express");
const app = express();
const res = require("express/lib/response");
app.use(express.json());

const { getall, postall } = require("./user");


app.get("/get", async(req, res) => {
    const list = await getall();
    res.json(list);
});


app.post("/post", async(req, res) => {
    const user = req.body;
    await postall(user);
    res.json("files added successfully!!");
});


app.listen(5000, () => { console.log("connection is Done!!bro") });