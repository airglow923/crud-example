import Joi from 'joi';

export default (req, res, next) => {
  const scheme = {
    name: Joi.string().email(),
    password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
  };

  const { err, val } = Joi.validate(req.body, schema);

  if (err) {
    switch (err.details[0].context.key) {
      case 'email':
        res.status(400).send({
          error: 'Invalid email',
        });
        break;
      case 'password':
        res.status(400).send({
          error: 'Invalid password',
        });
        break;
      default:
        break;
    }
  } else {
    next();
  }
};
