module.exports = (req, res) => {
  let bodyString = '';

  req.on('data', (chunk) => {
    bodyString += chunk.toString();

    req.body = Array.isArray(JSON.parse(bodyString))
      ? [...JSON.parse(bodyString)]
      : { ...JSON.parse(bodyString) };
  });
};
