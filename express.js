const express = require("express")

let app = express()

app.get("/", (req, res)=> res.send("Hello World!"))
app.get ("/contact", (req, res) => res.send(["Leonard", "Age 18"]))

//now we are creating a server, don't shut down the system...

app.listen(3000,() => console.log("Server is being created, wait for a while..."))