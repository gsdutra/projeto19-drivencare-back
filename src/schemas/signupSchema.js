import joi from 'joi';

export const signupSchema = joi.object(
	{
		name: joi.string().min(3).required(),
		email: joi.string().email().required(),
		password: joi.string().min(3).required(),
		role: joi.string().valid('doctor', 'patient').required(),
		location: joi.string().when('role', { is: 'doctor', then: joi.required() }),
		speciality: joi.string().when('role', { is: 'doctor', then: joi.required() }),
	}
)