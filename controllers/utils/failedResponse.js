const failedResponse = (input, code, message) => {
  if (!input) {
    return res.status(code).json(message);
  }
};

module.exports = failedResponse;
