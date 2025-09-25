import Joi from 'joi';

export const CheckoutFormValidationSchema = Joi.object({
    fullName: Joi.string().min(3).max(100).required().label('Full Name'),
    email: Joi.string().email({tlds: {allow: false}}).required().label('Email'),
    password: Joi
        .string()
        .min(8)
        .max(20)
        .pattern(new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/))
        .required()
        .label('Password'),
    phoneNumber: Joi.string().pattern(/^\+?[0-9\s\-()]{7,20}$/).required().label('Phone number'),
    address: Joi.string().min(5).max(200).required().label('Street Address'),
    city: Joi.string().min(2).max(100).required().label('City'),
    zipCode: Joi.string().pattern(/^[0-9]{4,10}$/).required().label('Zip Code'),
    сountry: Joi.string().min(5).max(100).required().label('Country'),
    promoCode: Joi.string().alphanum().min(5).max(20).optional().label('Promotion and Discount code')
});