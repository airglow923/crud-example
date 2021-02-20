import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')).required(),
});

const registerPolicy = async (req, res, next) => {
  const userInfo = req.body;
  let result = null;

  try {
    if (userInfo.length === undefined) {
      result = await schema.validateAsync(userInfo);
    } else {
      result = await Promise.all(
        userInfo.map(async (info) => {
          console.log(`Processing ${info.email}`);
          return schema.validateAsync(info);
        }),
      );
    }

    res.send(result);
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
