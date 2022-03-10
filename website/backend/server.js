import express from "express"
import cors from "cors"
import users from "./api/user.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", (req, res) => res.send(users))
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app