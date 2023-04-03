import { db } from "../database.connection.js";

export async function getAppointmentRequests(req, res) {
	try {
		const { id } = res.locals.userId;
		const {rows} = await db.query(`
			SELECT * FROM appointments
			WHERE doctor_id = $1
			AND status = 'pending'
		`, [id]);
		res.status(200).send(rows);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export async function processAppointmentRequest(req, res) {
	try {
		const { id } = res.locals.userId;
		const { appointmentId, status } = req.body;

		if (!appointmentId || !status) {
			return res.status(400).send("Missing appointmentId or status");
		}
		if (status !== "accepted" && status !== "rejected") {
			return res.status(400).send("Invalid status. Should be 'approved' or 'denied'");
		}

		const {rows} = await db.query(`
			UPDATE appointments
			SET status = $1
			WHERE id = $2
			AND doctor_id = $3
			RETURNING *
		`, [status, appointmentId, id]);

	} catch (error) {
		res.status(500).send(error.message);
	}
}