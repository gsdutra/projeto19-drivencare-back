import {db} from '../database.connection.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function singup(req, res) {
	try {

		const passwordHash = bcrypt.hashSync(req.body.password, 10)
		
		if (req.body.role === 'doctor'){
			const {name, email, role, location, specialty} = req.body

			await db.query(`INSERT INTO users 
			(name, email, password, role, location, speciality) 
			VALUES 
			($1, $2, $3, $4, $5, $6)`,
			[name, email, passwordHash, role, location, specialty])

		}else if (req.body.role === 'patient'){
			const {name, email, role} = req.body

			await db.query(`INSERT INTO users (name, email, password, role) VALUES ('$1', '$2', '$3', '$4')`, [name, email, passwordHash, role])
		}

		res.sendStatus(200)

	} catch (error) {
		console.log("erro aq")
		res.status(500).send(error.message)
	}
}

export async function singin(req, res) {
	try {
		const {email, password} = req.body

		const {rows} = await db.query(`SELECT * FROM USERS WHERE email=$1`, [email])

		if (rows.length === 0) return res.sendStatus(401)

		if (!bcrypt.compareSync(req.body.password, rows[0].password)) return res.sendStatus(401)

		const token = jwt.sign({userId: rows.id}, process.env.JWT_SECRET, {expiresIn: 500})

		res.status(200).send({auth: true, token})

	} catch (error) {
		res.status(500).send(error.message)
	}
}