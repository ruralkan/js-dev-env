import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'

//this server is not for actual production use
//This is just useful for hosting the minified production build for local debbuging purposes
//The next command en enable use of consoles
/*eslint-disable no-console*/


const port = 3000;
const app = express();

//To enable gzip compression in express to know the file sizes that will be sent
app.use(compression());

//To serve statics files
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
    //Hard coding for simplicity. Pretend this hits real database
    res.json([
        {"id": 1, "firstName": "Bob", "lastName": "Smith", "email":"bob@gmail.com"},
        {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email":"tnorton@yahoo.com"},
        {"id": 3, "firstName": "Tina", "lastName": "Lee", "email":"lee.tina@hotmail.com"}
    ]);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    } else{
        open('http://localhost:'+ port);
    }
})
