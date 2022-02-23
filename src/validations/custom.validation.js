const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (value.length > 64) {
    return helpers.message('password must not exceed 64 characters');
  }
  if (!value.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/)) {
    return helpers.message('password must contain at least one letter & number');
  }
  return value;
};

module.exports = {
  objectId,
  password
};
