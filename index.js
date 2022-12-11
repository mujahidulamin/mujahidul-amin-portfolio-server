const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const projects = require('./data/data.json')



app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.get('/projects', (req, res) => {
    res.send(projects)
})

app.get('/projects/:id', (req, res) =>{
    const id = req.params.id
    const selectProject = projects.find(n => n.id === id);
    res.send(selectProject)
})

app.listen(port, () => {
    console.log('server is running', port)
})
