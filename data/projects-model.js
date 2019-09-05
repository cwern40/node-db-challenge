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
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.projects_id')
        .select('t.id', 't.task_description', 't.task_notes', 't.task_complete', 'p.project_name', 'p.project_description')
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