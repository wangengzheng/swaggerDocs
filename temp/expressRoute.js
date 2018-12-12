const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

var express = require('express');
const app = express();
 
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(null));

app.listen(3000);
