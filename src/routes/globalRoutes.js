import express from 'express'
import { getScheduled } from '../controllers/globalController.js'

const globalRoutes = express.Router()
globalRoutes.get('/scheduled', getScheduled)

export default globalRoutes