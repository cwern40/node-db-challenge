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

server.post('/projects', (req, res) => {
    Projects.addProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to create project"
            })
        })
})

server.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to retrieve resources"
            })
        })
})

server.post('/resources', (req, res) => {
    Projects.addResource(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to create resource"
            })
        })
})

server.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to retrieve tasks"
            })
        })
})

server.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to create Task"
            })
        })
})