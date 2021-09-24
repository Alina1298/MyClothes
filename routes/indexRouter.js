require('dotenv').config()
const router = require('express').Router();
const { Clothes, Category } = require('../models');
const axios = require('axios');
const { getCategory, getClothesRandom } = require('../public/js/weatherClothes');

router.route('/')
  .get(async (req, res) => {
    try {
      const { city_title } = req.query
      console.log(city_title)
      const wheather = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city_title}&units=metric&lang=ru&appid=${process.env.API_WHEATHER}`);
      const data = wheather.data
      const description = data.weather.map(el => el.description).toString();
      const icon = data.weather.map(el => el.icon).toString();
      const date = new Date();
      const tempFromAPI = data.main.temp;
      const temp = Number(tempFromAPI.toString().match(/^\d+/gm));
      let categories = getCategory(temp);
      let clothesRandom = getClothesRandom(categories)
      let titleBottom = clothesRandom.bottom;
      let titleTop = clothesRandom.top;

      const categoryTop = await Category.findOne({ where: { title: titleTop } })
      const categoryBottom = await Category.findOne({ where: { title: titleBottom } })

      const clothesTop = await Clothes.findOne({ where: { season: categories.season, categoryId: categoryTop.id } });
      const clothesBottom = await Clothes.findOne({ where: { season: categories.season, categoryId: categoryBottom.id } });
      
      const clothes = [clothesTop, clothesBottom]

      if (clothes.includes(null)) {
        return res.render('errorClothes', {
          message: 'Тебе стоит пойти в магазин',
          error: {}
        })
      } else {
        return res.render('index', { city_title: city_title, temp: data.main.temp, description: description, icon: icon, min_temp: data.main.temp_min, max_temp: data.main.temp_max, wind_speed: data.wind.speed, clothes, date: date })
      }
      // const clothes = await Clothes.findAll()
      // res.render('index', { clothes })

    } catch (error) {
      console.log(error)
      return res.render('index')
    }
  })

module.exports = router;
