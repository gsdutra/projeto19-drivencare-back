import { db } from "../database.connection.js";

export async function getAppointmentRequests(req, res) {
	const { id } = res.locals.doctorId;
}

export async function processAppointmentRequest(req, res) {
	const { id } = res.locals.doctorId;
}