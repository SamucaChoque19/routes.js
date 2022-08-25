const express = require('express');

const app = express();

app.listen(8888, ()=>{
    console.log('App runnig...!')
});

app.get('/src', (request, response) => {
    return response.send('Hello World')
});