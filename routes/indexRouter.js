const router = require('express').Router();
// const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    // const wheather = await axios('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&lang=ru&appid=105c9fb5895b9a0ce42e7bf8bbf400a0');

    // console.log(wheather.data)
    // const data = wheather.data
    // const description = data.weather.map(el => el.description).toString();
    // const icon = data.weather.map(el => el.icon).toString();
    // res.render('index', { city: data.name, temp: data.main.temp, description: description, icon: icon, min_temp: data.main.temp_min, max_temp: data.main.temp_max, wind_speed: data.wind.speed })
    res.render('index')
  } catch (error) {
    console.log(error)
    res.render('index')
  }

  // res.render('index')
})

module.exports = router;
