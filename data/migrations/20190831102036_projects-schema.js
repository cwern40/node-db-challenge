
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('project_description');
        tbl.boolean('project_complete').defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128).notNullable();
        tbl.string('resource_description');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_description').notNullable();
        tbl.string('task_notes')
        tbl.boolean('task_complete').defaultTo(false);
        tbl.integer('projects_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('projects_resources', tbl => {
        tbl.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resources_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.primary(['projects_id', 'resources_id'])
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects_resources')  
};
