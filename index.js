const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const statusRouter = require("./routes/status.routes")
const filialRouter = require("./routes/filial.routes")
const trackRouter = require("./routes/track.routes")
const userRouter = require("./routes/user.routes")
const bookmarkRouter = require("./routes/bookmark.routes")
const archiveRouter = require("./routes/archive.routes")
const app = express()
const PORT = process.env.PORT || config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/status', statusRouter)
app.use('/api/filial', filialRouter)
app.use('/api/track', trackRouter)
app.use('/api/user', userRouter)
app.use('/api/bookmark', bookmarkRouter)
app.use('/api/archive', archiveRouter)


const start = async () => {
    try {   

        await mongoose.connect(config.get('dbUrl'))

        app.listen(PORT, () => {
            console.log("Server started on the port ", PORT)
        })
        
    } catch (error) {
        console.log(error)
    }
}

start()