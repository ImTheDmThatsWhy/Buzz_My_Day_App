const express = require("express")
const mongoose = require("mongoose")




const accountRouter = require("../routes/accountRoute")
const coffeeRoutes = require("../routes/coffeeRoutes")
const favouriteRoutes = require("../routes/favouriteRoutes")
const postRoutes = require("../routes/postRoute")
const reviewRoute = require("../routes/reviewRoute")
const userRoute = require("../routes/userRoute")
const logger = require("../middlewares/logger")




const app = express()


app.use(express.json())
app.use(logger)




app.use("/account", accountRouter)




app.listen(3000, async () => {
    console.log("Server started")
    await mongoose.connect("mongodb+srv://jackvassallo01:Xd39FxnSMQETljKV@cluster0.h2v5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connected")
})

