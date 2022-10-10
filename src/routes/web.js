import express from 'express';
import { getHomepage, getWebhook, postWebhook } from '../controllers/homepageController.js';

let router = express.Router();

//init all web routes
export const initWebRoutes = app => {
  router.get('/', getHomepage);
  router.get('/webhook', getWebhook);
  router.post('/webhook', postWebhook);

  return app.use('/', router);
};


