import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoutes from "../middlewares/protectRoutes.js";

const router = express.Router()

router.get('/:id', protectRoutes, getMessages)
router.post('/send/:id', protectRoutes, sendMessage)

export default router