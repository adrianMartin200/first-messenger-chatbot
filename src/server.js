import { config } from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import { configViewEngine } from './config/viewEngine.js';
import { initWebRoutes } from './routes/web.js';

console.clear();
config();
let app = express();

//config body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

//config web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Messenger bot is running at the port ${port}`);
});
