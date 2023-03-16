module.exports = (req, res) => {
  res.sendNotFoundErrorJson = () => {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Resource is not found' }));
  };

  res.sendDBErrorJson = (err) => {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(err));
  };

  res.sendClientErrorJson = (err) => {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(err));
  };
};
