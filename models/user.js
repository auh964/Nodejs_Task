const Sequelize= require('sequelize');

 const User =  sequelize.define('user', {
    id:{
        type: Sequelize.STRING ,
        primaryKey: true
    },
    type: {
      type:   Sequelize.ENUM ,
      values: ['NORMAL', 'ADMIN']
    }
  })

  module.exports = User ;