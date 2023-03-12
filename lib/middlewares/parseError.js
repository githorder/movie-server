module.exports = (req, res) => {
  res.sendNotFoundErrorJson = () => {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Resource is not found' }));
  };

  res.sendDBErrorJson = (error) => {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({ code: error.code, message: 'Something went wrong' })
    );
  };

  res.sendClientErrorJson = (error) => {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({ code: error.code, message: 'Something went wrong' })
    );
  };
};
