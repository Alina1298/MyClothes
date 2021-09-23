require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const cors = require('cors');

const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient();

const PORT = process.env.PORT;
const app = express();

const checkUser = require('./middleware/checkUser');
const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter.js');
const clothesRouter = require('./routes/clothesRouter');

hbs.registerPartials(path.join(__dirname, 'views/partials'))

hbs.registerHelper("check", function (id, userid) {
  return id === userid
});

app.set('view engine', 'hbs');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(
  session({
    name: 'sId',
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: 'mlkfdamfdskjnfsgnjk',
    resave: false,
  })
)

app.use(checkUser);

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/clothes', clothesRouter);

app.listen(PORT, () => {
  console.log('Server start on port ', PORT)
})
