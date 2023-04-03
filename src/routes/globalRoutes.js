import express from 'express'
import { getScheduled, getHistory } from '../controllers/globalController.js'
import {verifyJWT} from '../middlewares/verifyJWT.js'

const globalRoutes = express.Router()
globalRoutes.get('/scheduled', verifyJWT, getScheduled)
globalRoutes.get('/history', verifyJWT, getHistory)

export default globalRoutes