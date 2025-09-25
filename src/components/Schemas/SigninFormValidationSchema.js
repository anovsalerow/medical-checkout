import Joi from 'joi';

export const SigninFormValidationSchema = Joi.object({
    email: Joi.string().email({tlds: {allow: false}}).required().label('Email'),
    password: Joi
        .string()
        .min(8)
        .max(20)
        .pattern(new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/))
        .required()
        .label('Password')
});