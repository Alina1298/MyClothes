'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Джинсы',
        property: 'Низ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Брюки',
        property: 'Низ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Шорты',
        property: 'Низ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Блузка(рубашка)',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Юбка',
        property: 'Низ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Куртка',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Джемпер, кардиган',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Толстовка(худи)',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Жакет(пиджак)',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Жилет',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Майка(футболка)',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Кофта',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Свитер',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Пальто',
        property: 'Верх',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Штаны',
        property: 'Низ',
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
