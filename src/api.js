const express = require('express')

const app = express()

const port = 3000

app.get('/api/', (req, res) => {
    res.send('Hola Mundo')
})

app.listen(port, () => {
    console.log(`El ejemplo se está ejecutando en el puerto ${port}`);
    console.log('Run in: http://localhost:3000/api/');
    
    
})