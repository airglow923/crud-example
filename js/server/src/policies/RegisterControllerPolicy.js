import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')).required(),
});

export default async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
  } catch (err) {
    switch (err.details[0].context.key) {
      case 'email':
        res.status(400).send({
          error: 'Invalid email',
        });
        break;
      case 'password':
        res.status(400).send({
          err: 'Invalid password',
        });
        break;
      default:
        break;
    }
  }

  next();
};
