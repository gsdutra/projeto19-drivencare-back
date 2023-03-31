import express from 'express'
import { getDoctors, getDoctorSchedule, postScheduleRequest } from '../controllers/patientsController.js'

const patientsRoutes = express.Router()
patientsRoutes.get('/doctors', getDoctors)
patientsRoutes.get('/doctors-schedule/:id', getDoctorSchedule)
patientsRoutes.post('/schedule-request', postScheduleRequest)

export default patientsRoutes