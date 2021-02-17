import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().email(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')),
});

export default async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    next();
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
};
