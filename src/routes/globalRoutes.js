import express from 'express'
import { getScheduled } from '../controllers/globalController.js'
import {verifyJWT} from '../middlewares/verifyJWT.js'

const globalRoutes = express.Router()
globalRoutes.get('/scheduled', verifyJWT, getScheduled)

export default globalRoutes