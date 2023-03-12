require('dotenv').config();

const Application = require('./lib/app.js');

const genresRouter = require('./routes/genres-routes/genres.routes.js');
const moviesRouter = require('./routes/movies-routes/movies.routes.js');

const jsonParser = require('./lib/middlewares/parseJson.js');
const urlParser = require('./lib/middlewares/parseUrl.js');
const bodyParser = require('./lib/middlewares/parseBody.js');
const errorParser = require('./lib/middlewares/parseError.js');

const PORT = process.env.PORT || 3000;

const app = new Application();

app.use(jsonParser);
app.use(urlParser(`http://localhost:${PORT}`));
app.use(bodyParser);
app.use(errorParser);

app.addRouter(genresRouter);
app.addRouter(moviesRouter);

app.listen(PORT, () => console.log(`Server starts at ${PORT}`));
