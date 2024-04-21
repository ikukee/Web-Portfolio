import express from 'express'
import publicAPI from "./routes/api.js";
import privateAPI from "./routes/auth.js";
import cors from "cors";
const app = express();

app.use("/", (req, res) => {
    res.send("TEST")
})
app.use("/api/", publicAPI);
app.use("/api/", privateAPI)
app.listen(3000, () => {
    console.log("app is running")
})
