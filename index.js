require('dotenv').config();

const Application = require('./lib/app.js');

const genresRouter = require('./routes/genres-routes/genres.routes.js');

const jsonParser = require('./lib/middlewares/parseJson.js');
const urlParser = require('./lib/middlewares/parseUrl.js');
const bodyParser = require('./lib/middlewares/parseBody.js');

const PORT = process.env.PORT || 3000;

const app = new Application();

app.use(jsonParser);
app.use(urlParser(`http://localhost:${PORT}`));
app.use(bodyParser);

app.addRouter(genresRouter);

app.listen(PORT, () => console.log(`Server starts at ${PORT}`));
