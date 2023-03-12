module.exports = (baseUrl) => (req, res) => {
  const parsedUrl = new URL(req.url, baseUrl);

  let params = {};
  parsedUrl.searchParams.forEach((val, key) => (params[key] = val));

  req.params = params;
  req.pathname =
    parsedUrl.pathname[parsedUrl.pathname.length - 1] === '/'
      ? parsedUrl.pathname.slice(0, parsedUrl.pathname.length - 1)
      : parsedUrl.pathname;
};
