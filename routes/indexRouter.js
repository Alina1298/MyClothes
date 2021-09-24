require('dotenv').config()
const router = require('express').Router();
const { Clothes, Category } = require('../models');
const axios = require('axios');
const { getCategory, getClothesRandom } = require('../public/js/weatherClothes');

router.get('/', async (req, res) => {
  try {
    const wheather = await axios(`https://api.openweathermap.org/data/2.5/weather?q=Istanbul&units=metric&lang=ru&appid=${process.env.API_WHEATHER}`);
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

    console.log('clothes', clothes)

    res.render('index', { city: data.name, temp: data.main.temp, description: description, icon: icon, min_temp: data.main.temp_min, max_temp: data.main.temp_max, wind_speed: data.wind.speed, clothes, date: date })

    // res.render('index', { clothes })
  } catch (error) {
    console.log(error)
    res.render('index')
  }
})

module.exports = router;
