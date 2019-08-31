const db = require('./db-config')

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}

function getResources() {
    return db('resources')
}

function getProjects() {
    return db('projects')
}

function getTasks() {
    return db('tasks')
}

function addResource(resource) {
    return db('resources').insert(resource)
}

function addProject(project) {
    return db('projects').insert(project)
}

function addTask(task) {
    return db('Tasks').insert(task)
}