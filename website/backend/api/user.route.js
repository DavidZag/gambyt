import express from "express"
import UserController from "./user.controller.js"

const router = express.Router()

router.route("/").get(UserController.apiGetUsers)
router.route("/emails").get(UserController.apiGetUserEmails)

export default router