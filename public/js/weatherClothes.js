function getCategory(number) {
  let obj = {};
  if (number >= 25) {
    obj = {
      season: 'лето',
      category: {
        'низ': ['Джинсы', 'Брюки', 'Шорты', 'Юбка'],
        'верх': ['Блузка(рубашка)', 'Майка(футболка)']
      },
    };
  } else if (number < 25 && number >= 20) {
    obj = {
      season: 'лето',
      category: {
        'низ': ['Джинсы', 'Брюки', 'Шорты', 'Юбка'],
        'верх': ['Блузка(рубашка)', 'Майка(футболка)', 'Джемпер(кардиган)']
      },
    }
  } else if (number < 20 && number >= 15) {
    obj = {
      season: 'лето',
      category: {
        'низ': ['Джинсы', 'Брюки', 'Шорты', 'Юбка', 'Штаны'],
        'верх': ['Блузка(рубашка)', 'Майка(футболка)', 'Джемпер(кардиган)', 'Толстовка(худи)']
      },
    }
  } else if (number < 15 && number >= 10) {
    obj = {
      season: 'осень',
      category: {
        'низ': ['Джинсы', 'Брюки', 'Юбка', 'Штаны'],
        'верх': ['Блузка(рубашка)', 'Джемпер(кардиган)', 'Толстовка(худи)', 'Куртка', 'Пальто']
      },
    }
  } else if (number < 15 && number >= 10) {
    obj = {
      season: 'весна',
      category: {
        'низ': ['Джинсы', 'Брюки', 'Юбка', 'Штаны'],
        'верх': ['Блузка(рубашка)', 'Джемпер(кардиган)', 'Толстовка(худи)', 'Куртка', 'Пальто']
      },
    }
  } else if (number < 10 && number >= 0) {
    obj = {
      season: 'осень',
      category: {
        'низ': ['Джинсы', 'Брюки', 'Штаны'],
        'верх': ['Блузка(рубашка)', 'Толстовка(худи)', 'Куртка', 'Пальто', 'Жилет', 'Жакет(пиджак)', 'Свитер'],
      },
    }
  } else if (number < 10 && number >= 0) {
    obj = {
      season: 'весна',
      category: {
        'низ': ['Джинсы', 'Брюки', 'Штаны'],
        'верх': ['Блузка(рубашка)', 'Толстовка(худи)', 'Куртка', 'Пальто', 'Жилет', 'Жакет(пиджак)', 'Свитер'],
      },
    }
  } else if (number < 0) {
    obj = {
      season: 'зима',
      category: {
        'низ': ['Джинсы', 'Брюки', 'Штаны'],
        'верх': ['Толстовка(худи)', 'Куртка', 'Пальто', 'Свитер'],
      },
    }
  };
  return obj;
}

function getClothesRandom(obj) {
  let newObj;
  let bottom = obj.category.низ;
  let top = obj.category.верх;
  let randomBot;
  let randomTop;
  for (let i = 0; i < bottom.length; i++) {
    randomBot = Math.round(Math.random() * i)
  }
  for (let j = 0; j < top.length; j++) {
    randomTop = Math.round(Math.random() * j)
  }
  newObj = {
    bottom: bottom[randomBot],
    top: top[randomTop]
  }
  return newObj
}


module.exports = { getCategory, getClothesRandom };
