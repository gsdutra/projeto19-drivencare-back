import { db } from "../database.connection.js";

export async function getAppointmentRequests(req, res) {
	try {
		
	} catch (error) {
		res.status(500).send(error.message);
	}
	const { id } = res.locals.doctorId;
}

export async function processAppointmentRequest(req, res) {
	const { id } = res.locals.doctorId;
}