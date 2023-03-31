import express from 'express'
import { getAppointmentRequests, processAppointmentRequest } from '../controllers/doctorsController.js'
import {verifyJWT} from '../middlewares/verifyJWT.js'

const doctorsRoutes = express.Router()
doctorsRoutes.get('/appointment-requests', verifyJWT, getAppointmentRequests)
doctorsRoutes.post('/process-appointment/:appointment_id/:status', verifyJWT, processAppointmentRequest)

export default doctorsRoutes