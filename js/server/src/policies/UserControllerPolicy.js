import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')).required(),
});

const registerPolicy = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
  } catch (err) {
    switch (err.details[0].context.key) {
      case 'email':
        res.status(504).send({
          error: 'Invalid email',
        });
        break;
      case 'password':
        res.status(505).send({
          error: 'Invalid password',
        });
        break;
      default:
        break;
    }
  }

  next();
};

export { registerPolicy };
