
const mongoose = require('mongoose');
const UserModel = require('./users.js');
const FilmModel = require('./films.js');

//MongoDB connection
const DB_URL = 'mongodb://mongo:wt3ir2qLcxLSESZcbXkt@containers-us-west-146.railway.app:7040';

const mongoConnection = mongoose.connect(DB_URL,{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

    },
    
    /*(e)=>{
        if(e){
            console.log('DB: ERROR !!');
        }else{
            console.log('Conexion Correcta !!');
        }
    }*/
);

// Evento de conexión exitosa
mongoose.connection.on('connected', () => {
    console.log('Conexión exitosa a la base de datos MongoDB');
});

// Evento de error de conexión
mongoose.connection.on('error', (err) => {
    console.error('Error de conexión a MongoDB:', err);
});
    
// Evento de desconexión
mongoose.connection.on('disconnected', () => {
    console.log('Desconectado de la base de datos MongoDB');
});


const User = UserModel;
const Film = FilmModel;


module.exports = {
    User,
    Film,
}

