'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Джинсы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Брюки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Шорты',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Платье',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Блузка, рубашка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Юбка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Верхняя одежда',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Джемпер, кардиган',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Комбинезон',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Толстовка, худи',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Жакет, пиджак',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Жилет',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
