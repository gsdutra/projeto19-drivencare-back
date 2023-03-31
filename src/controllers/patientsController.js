import { db } from "../database.connection.js";

export async function getDoctors(req, res) {
	try {
		let {name, speciality, location} = req.query

		if (name === undefined) name = '%'
		if (speciality === undefined) speciality = '%'
		if (location === undefined) location = '%'
		
		const {rows} = await db.query(`
			SELECT id, name, speciality, location
			FROM users
			WHERE role = 'doctor' AND
			name ILIKE $1 AND
			speciality ILIKE $2 AND
			location ILIKE $3;
		`, [`%${name}%`, `%${speciality}%`, `%${location}%`])

		res.status(200).send(rows)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

export async function getDoctorSchedule(req, res) {
	try {
		
	} catch (error) {
		res.status(500).send(error.message)
	}
}

export async function postScheduleRequest(req, res) {
	try {

		let {date, doctorId} = req.body

		if (date.getMinutes()!==0 || date.getSeconds()!==0 || date.getMilliseconds()!==0) {
			return res.send(400).send('Invalid date. Date must be in the format YYYY-MM-DD HH:MM:SS with 00 values for minutes, seconds and milliseconds.')
		}

		const {rows} = await db.query(`
			SELECT * FROM appointments WHERE doctor_id = $1 AND date = $2;
		`, [doctorId, date])

		if (rows.length > 0) {
			return res.status(400).send('This doctor is already booked for this date.')
		}


		await db.query(`
		INSERT INTO appointments
		(patient_id, doctor_id, date, duration_minutes)
		VALUES ($1, $2, $3);`, [res.locals.userId, req.body.doctorId, date, req.body.duration_minutes])

	} catch (error) {
		res.status(500).send(error.message)
	}
}