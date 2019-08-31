const express = require('express');
const server = express();
const Projects = require('./data/projects-model');

server.use(express.json());

module.exports = server;

server.get('/projects', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to retrieve projects"
            })
        })
})