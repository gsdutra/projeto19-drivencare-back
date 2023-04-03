import { db } from "../database.connection.js";

export async function getAppointmentRequests(req, res) {
	try {
		const { id } = res.locals.userId;
		const {rows} = await db.query(`
			SELECT * FROM appointment_requests
			WHERE doctor_id = $1
			AND status = 'pending'
		`, [id]);
	} catch (error) {
		res.status(500).send(error.message);
	}
	const { id } = res.locals.doctorId;
}

export async function processAppointmentRequest(req, res) {
	const { id } = res.locals.doctorId;
}