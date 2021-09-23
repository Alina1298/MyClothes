require('dotenv').config()
const router = require('express').Router();
const { Clothes } = require('../models');
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const wheather = await axios(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&lang=ru&appid=${process.env.API_WHEATHER}`);

    console.log(wheather.data)
    const data = wheather.data
    const description = data.weather.map(el => el.description).toString();
    const icon = data.weather.map(el => el.icon).toString();
    const clothes = await Clothes.findAll();    
    res.render('index', { city: data.name, temp: data.main.temp, description: description, icon: icon, min_temp: data.main.temp_min, max_temp: data.main.temp_max, wind_speed: data.wind.speed, clothes })

    // res.render('index', { clothes })
  } catch (error) {
    console.log(error)
    res.render('index')
  }

  // res.render('index')
})

module.exports = router;
