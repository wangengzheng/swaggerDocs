const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
 
var options = { 
  swaggerUrl:'http://petstore.swagger.io/v2/swagger.json',
  swaggerUrls:[		
		{url:'http://petstore.swagger.io/v2/swagger.json',name:'swagger'},
		
	],
  customJs:'./custom.js',
  customSiteTitle:'swagger 文档',
  customCss:'body{}',
  customfavIcon:''
}


app.get('/', function(req, res){
    res.redirect('/api-docs');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

app.listen(3000);
