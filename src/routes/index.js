import express from 'express'
import authRoutes from './authRoutes.js'
import patientsRoutes from './patientsRoutes.js'
import doctorsRoutes from './doctorsRoutes.js'
import globalRoutes from './globalRoutes.js'


const router = express.Router();

router.use([authRoutes, patientsRoutes, doctorsRoutes, globalRoutes]);

export default router;