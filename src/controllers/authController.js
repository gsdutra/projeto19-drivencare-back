import {db} from '../database.connection.js';
import bcrypt from 'bcrypt'

export async function singin(req, res) {
	try {

		const passwordHash = bcrypt.hashSync(req.body.password, 10)
		
		if (req.body.role === 'doctor'){
			const {name, email, role, location, specialty} = req.body

			await db.query(`INSERT INTO users (name, email, password, role, location, speciality) VALUES ('$1', '$2', '$3', '$4', '$5', '$6')`, [name, email, passwordHash, role, location, specialty])
		}else{
			const {name, email, role} = req.body

			await db.query(`INSERT INTO users (name, email, password, role) VALUES ('$1', '$2', '$3', '$4')`, [name, email, passwordHash, role])
		}

		res.sendStatus(200)

	} catch (error) {
		res.status(500).send(error.message)
	}
}

export async function singup(req, res) {
	try {

	} catch (error) {
		res.status(500).send(error.message)
	}
}