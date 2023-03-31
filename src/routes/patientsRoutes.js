import express from 'express'
import { getDoctors, getDoctorSchedule, postScheduleRequest } from '../controllers/patientsController.js'
import {verifyJWT} from '../middlewares/verifyJWT.js'

const patientsRoutes = express.Router()
patientsRoutes.get('/doctors', verifyJWT, getDoctors)
patientsRoutes.get('/doctors-schedule/:id', verifyJWT,getDoctorSchedule)
patientsRoutes.post('/schedule-request', verifyJWT,postScheduleRequest)

export default patientsRoutes