import express from 'express'
import { getAppointmentRequests, processAppointmentRequest } from '../controllers/doctorsController.js'

const doctorsRoutes = express.Router()
doctorsRoutes.get('/appointment-requests', getAppointmentRequests)
doctorsRoutes.post('/process-appointment/:appointment_id/:status', processAppointmentRequest)

export default doctorsRoutes