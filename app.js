const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));


/* enrutadores */

const mainRouter = require ('./routes/main.js');


/* rutas */

app.use('/', mainRouter);



app.listen(port, console.log(`The serever is ON in the port ${port}, \nhttp://localhost:${port}`));