const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
 
var webbase_options = {
  swaggerUrl:'http://ppt.jxt189.com/webbase/swagger/docs/v1',
  swaggerUrls:[		
		{url:'http://ppt.jxt189.com/webbase/swagger/docs/v1',name:'webbase_v1'},
		{url:'http://ppt.jxt189.com/webbase/swagger/docs/v2',name:'webbase_v2'},
		{url:'http://ppt.jxt189.com/hdkt/swagger/docs/v1',name:'hdkt_v1'},
		{url:'http://ppt.jxt189.com/hdkt/swagger/docs/v1',name:'hdkt_v2'},
	],
  customJs:'./custom.js'
}


app.get('/', function(req, res){
  res.send('Hello World &nbsp;<a href="/api-docs" >see docs</a>');
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, webbase_options));
//app.use('/hdkt', swaggerUi.serve, swaggerUi.setup(null, hdkt_options));
//app.use('/answer', swaggerUi.serve, swaggerUi.setup(null, webbase_options));

app.listen(3000);
