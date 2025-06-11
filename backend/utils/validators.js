const Joi = require('joi');

const validateProduct = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    description: Joi.string().allow(''),
    price: Joi.number().required().min(0),
    category: Joi.string().required(),
    stock: Joi.number().required().min(0),
    images: Joi.array().items(Joi.string())
  });

  return schema.validate(data);
};

module.exports = {
  validateProduct
}; 