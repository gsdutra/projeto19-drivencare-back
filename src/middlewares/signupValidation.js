import {signupSchema} from '../schemas/signupSchema.js';

export async function signupValidation(req, res, next) {
	try {
		const validation = signupSchema.validate(req.body, {abortEarly: true})

		if (validation.error){
			return res.status(422).send(validation.error.details)
		}

		next()
		
	} catch (error) {
		res.status(500).send(error.message);
	}
}