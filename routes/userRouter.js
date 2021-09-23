const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');
const authUser = require('../middleware/authUser')

router.route('/registration')
  .get(authUser, async (req, res) => {
    res.render('registration')
  })

  .post(async (req, res) => {
    const { name, email, password, gender } = req.body;

    if (name && email && password, gender) {
      const hashPass = await bcrypt.hash(password, 10);
      try {
        const newUser = await User.create({ name, gender, email, password: hashPass });
        req.session.user = {
          id: newUser.id,
          name: newUser.name,
          gender: newUser.gender
        }
        return res.redirect('/');
      } catch (err) {
        res.render('error', {
          message: 'Такой пользователь уже существует, попробуйте еще раз',
          error: {}
        })
      }
    } else {
      return res.redirect('/user/registration')
    }
  })


router.route('/authorization')
  .get(authUser, async (req, res) => {
    res.render('authorization')
  })

  .post(authUser, async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const currentUser = await User.findOne({ where: { email: email } })
        if (currentUser && await bcrypt.compare(password, currentUser.password)) {
          req.session.user = {
            id: currentUser.id,
            name: currentUser.name
          }
          return res.redirect('/')
        } else {
          return res.render('error', {
            message: 'Такого пользователя не существует, зарегистрируйтесь',
            error: {}
          })
        }
      } catch (err) {
        return res.redirect('/user/authorization')
      }
    } else {
      return res.redirect('/user/authorization')
    }
  })

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sId').redirect('/')
})

module.exports = router;
