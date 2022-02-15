// routes/index.js
// Общее подлючение всех роутов через этот файл.
// Все роуты подключены в файле index.js, который находится
// в папке routes. Оттуда единый роут подключается в файле app.js / 2.14

// Описанные роуты работают корректно /21.81:
// запрос на GET /users/me возвращает информацию о пользователе (email и имя);
// PATCH /users/me — обновляет информацию о пользователе;
// GET /movies все сохранённые пользователем фильмы;
// POST /movies создаёт фильм с переданными в теле данными;
// DELETE /movies/_id удаляет сохранённый фильм по _id;
// POST /signup создаёт пользователя с переданными в теле данными;
// POST /signin возвращает JWT, если в теле запроса переданы правильные почта и пароль.
// Если вы сохраняете JWT в куках, роут /signout должен удалять JWT из куки.

// Все роуты, кроме /signin и /signup, защищены авторизацией. /

// Роуты пользователей и роуты фильмов описаны в отдельных файлах. / 3.64

const router = require('express').Router();

const auth = require('../middlewares/auth');

const {
  createUser,
  loginUser,
} = require('../controllers/users');

const userRouter = require('./users');
const movieRouter = require('./movies');

router.post('/signin', loginUser);
router.post('/signup', createUser);

router.use(auth, userRouter);
router.use(auth, movieRouter);

module.exports = router;
