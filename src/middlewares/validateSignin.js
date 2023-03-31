import { signinSchema } from "../schemas/signinSchema.js";

export async function validateSignin(req, res, next){
	try {
		const validation = signinSchema.validate(req.body, {abortEarly: true})

		if (validation.error){
			return res.status(422).send(validation.error.details)
		}

		next()

	} catch (error) {
		res.status(500).send(error.message)
	}
}