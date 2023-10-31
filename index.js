
const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//instancia de express en mi app
const app = express();
app.use(cors());


//middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//primera ruta
app.use('/api', apiRoutes);


//Server
app.set('PORT', 3000)

app.listen(app.get('PORT'), ()=>{
    console.log('server up');
});




