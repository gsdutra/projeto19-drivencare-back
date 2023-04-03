import {db} from "../database.connection.js";

export async function getScheduled(req, res) {
	try {
		const { id } = res.locals.userId;

		let role = await db.query(`
			SELECT role FROM users
			WHERE id = $1;`, [id]);
		role = role.rows[0].role;

		const {rows} = await db.query(`
			SELECT * FROM appointments
			WHERE ${role}_id = $1;
		`, [id]);
		res.status(200).send(rows);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export async function getHistory(req, res) {
	try {
		const { id } = res.locals.userId;

		let role = await db.query(`
		SELECT role FROM users
		WHERE id = $1;`, [id]);
		role = role.rows[0].role;

		const currentDate = new Date().toISOString();
		
		const {rows} = await db.query(`
			SELECT * FROM appointments
			WHERE ${role}_id = $1
			AND date < $2;
		`, [id, currentDate]);
		res.status(200).send(rows);
	} catch (error) {
		res.status(500).send(error.message);
	}
}