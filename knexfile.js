// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3',
      typeCast: function(field, next) {
        if (field.type == 'TINYINT' && field.length == 1) {
            return (field.string() == '1'); // 1 = true, 0 = false
        } 
        return next();
    }
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
