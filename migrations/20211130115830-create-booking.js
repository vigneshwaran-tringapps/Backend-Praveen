'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.UUID
      },
      CarId: {
        type: Sequelize.INTEGER
      },
      Payment_Id: {
        type: Sequelize.INTEGER
      },
      ToLocation: {
        type: Sequelize.STRING
      },
      FromLocation: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.DATE
      },
      Payment_status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Booking');
  }
};