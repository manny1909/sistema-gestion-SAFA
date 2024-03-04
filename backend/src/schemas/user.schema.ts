import Joi from 'joi';

const id = Joi.number();
const name = Joi.string().min(3).max(45);
const discord = Joi.string().min(3).max(45);
const email = Joi.string();
const password = Joi.string();
const roles = Joi.array();

const signUpUserScheme = Joi.object({
  user: {
    discord: discord.required(),
    name: name.required(),
    email: email.required(),
    password: password.required(),
  }
});
const createUserScheme = Joi.object({
  user: {
    discord: discord.required(),
    name: name.required(),
    email: email.required(),
    roles: roles.required(),
  }
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

export { signUpUserScheme, createUserScheme, updateUserScheme, getUserScheme, loginUserScheme };

