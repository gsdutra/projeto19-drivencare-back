import joi from 'joi';


export const appointmentSchema = joi.object(
	{
		doctor_id: joi.number().required(),
		date: joi.date().iso().required(),
		duration_minutes: joi.number().min(15).max(180).required(),
	}
)