import Joi from 'joi';

const id = Joi.number();
const name = Joi.string().min(3).max(45);
const email = Joi.string();
const password = Joi.string();

const createUserScheme = Joi.object({
  username: name.required(),
  email: email.required(),
  password: password.required(),
});

const updateUserScheme = Joi.object({
  username: name,
  password: password,
});

const loginUserScheme = Joi.object({
  email: email.required(),
  password: password.required(),
});

const getUserScheme = Joi.object({
  id: id.required(),
});

export { createUserScheme, updateUserScheme, getUserScheme, loginUserScheme };

