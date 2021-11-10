const router = require('express').Router();
const { Category, Clothes } = require('../models');
const axios = require('axios');

router.route('/')
  .get(async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.render('addclothes', { categories })
    } catch (error) {
      return res.sendStatus(404).end()
    }
  })
  .post(async (req, res) => {
    try {
      const { title, photo, season, color, category } = req.body;
      const categoryId = await Category.findOne({ where: { title: category } })
      const clothes = await Clothes.create({ title: title, photo: photo, season: season, color: color, userId: req.session?.user?.id, categoryId: categoryId.id })
      return res.json(clothes)
    } catch (error) {
      return res.sendStatus(500).end();
    }
  })

router.route('/my')
  .get(async (req, res) => {
    try {
      const clothes = await Clothes.findAll();
      res.render('myClothes', { clothes })
    } catch (error) {
      return res.sendStatus(404).end()
    }
  })
  .delete(async (req, res) => {
    const clothes = await Clothes.findOne({ where: { id: req.body.id } });
    if (clothes.userId === req.session.user.id) {
      clothes.destroy();
      return res.sendStatus(200).end()
    } else {
      return res.sendStatus(403).end()
    }
  })


router.route('/redact/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const categories = await Category.findAll();
      const clothes = await Clothes.findOne({ where: { id: id } });
      res.render('redactClothes', { clothes, categories })
    } catch (error) {
      return res.sendStatus(404).end()
    }
  })
  .put(async (req, res) => {
    try {
      await Clothes.update(req.body, { where: { id: req.body.id } })
      res.sendStatus(200).end()
    } catch (error) {
      return res.sendStatus(403).end()
    }
  })

module.exports = router;
