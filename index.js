const express = require("express")
const app = express()
const PORT = 3000


const userRouter = require("./routes/books")

app.use(express.json())
app.use("/users", userRouter)










app.get("/", (req, res) => {
    res.send("Hello woojin!")
});

app.listen(PORT, () => {
    console.log("Server is running!")
});
