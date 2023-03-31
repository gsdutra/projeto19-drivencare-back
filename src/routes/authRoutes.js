import { singin, singup } from '../controllers/authController.js'
import {validateSignin} from '../middlewares/validateSignin.js'
import {validateSignup} from '../middlewares/validateSignup.js'

import express from 'express'

const authRoutes = express.Router()
authRoutes.post('/signin', validateSignin, singin)
authRoutes.post('/signup', validateSignup, singup)

export default authRoutes