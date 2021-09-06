import Joi from "joi";

export const user = Joi.object({
    userName: Joi.string().required(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
    phone: Joi.string(),
    gender: Joi.alternatives(['Male', 'Female'])
}).unknown(true);


