
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
 
//const swaggerDocument = require('./swagger.json');
 
var options = {
  swaggerUrl: 'http://ppt.jxt189.com/WebBase/swagger/docs/v1'
  //swaggerUrl: 'http://petstore.swagger.io/v2/swagger.json'
}
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

app.listen(3000)
