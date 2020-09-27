const Sequelize= require('sequelize');

  const UserProfile = sequelize.define('UserProfile', {
    userId: {
      type: Sequelize.STRING ,
      references: { 
        model: 'user',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    displayName:{
      type: Sequelize.STRING

    },
    email:{
      type: Sequelize.STRING
    }
  });

  module.exports = UserProfile ;