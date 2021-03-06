// CONFIG
const { NODE_ENV, JWT_SECRET, DB_HOST } = process.env;

const MONGO_URI = NODE_ENV === 'production' ? DB_HOST : 'mongodb://localhost:27017/moviesdb';
const MONGO_CONFIG = ({
  useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const JWT_KEY = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

// CORS
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
const ALLOWED_CORS = [
  'http://localhost:3000',
  'https://localhost:3000',
  'http://zootoo.ru',
  'https://zootoo.ru',
  'https://api.zootoo.ru',
  'http://192.168.1.6:3000',
  'http://192.168.1.6',
  '*',
];

// Авторизация и регистрация
const SIGNIN_MSG = {
  // email
  EMAIL: 'Заполните поле Email!',
  EMAIL_MIN: 'Минимальная длинна Email 8 символов!',
  EMAIL_MAX: 'Максимальная длинна Email 50 символов!',
  EMAIL_ERR: 'Поле "Email" содержит запрещенные символы',
  // password
  PASS: 'Заполните поле Пароль',
  PASS_MIN: 'Минимальная длинна пароля 8 символов!',
  PASS_MAX: 'Максимальная длинна пароля 30 символов!',
  PASS_ERR: 'Неправильно заполнено поле пароль',
  // name
  NAME: 'Заполните поле Имя!',
  NAME_MIN: 'Минимальная длинна поля Имя 2 символа!',
  NAME_MAX: 'Максимальная длинна поля Имя 30 символов!',
  NAME_ERR: 'Поле "Имя" содержит запрещенные символы',
};

// Создание фильма
const CREATE_MOVIE_MSG = {
  // Поле COUNTRY
  COUNTRY: 'Заполните поле Страна!',
  COUNTRY_MIN: 'Минимальная длинна поля Страна 3 символа!',
  COUNTRY_MAX: 'Максимальная длинна поля Страна 74 символа!',
  COUNTRY_ERR: 'Поле "Страна" содержит запрещенные символы',

  // Поле DIRECTOR
  DIRECTOR: 'Заполните поле Режиссер!',
  DIRECTOR_MIN: 'Минимальная длинна поля Режиссер 4 символа!',
  DIRECTOR_MAX: 'Максимальная длинна поля Режиссер 255 символов!',
  DIRECTOR_ERR: 'Поле Режиссер содержит запрещенные символы',

  // Поле DURATION
  DURATION: 'Заполните поле Длительность фильма!',
  DURATION_MIN: 'Минимальная длинна поля Длительность фильма 1 символ!',
  DURATION_MAX: 'Максимальная длинна поля Длительность фильма 999 символов!',
  // Поле YEAR
  YEAR: 'Заполните поле Год!',
  YEAR_MIN: 'Минимальная длинна поля Год 4 символа!',
  YEAR_MAX: 'Максимальная длинна поля Год 4 символа!',
  YEAR_ERR: 'Поле "Страна" содержит запрещенные символы',
  // Поле DESCRIPTION
  DESCRIPTION: 'Заполните поле Описание!',
  DESCRIPTION_MIN: 'Минимальная длинна поля Описание 2 символа!',
  DESCRIPTION_MAX: 'Максимальная длинна поля Описание 900 символов!',
  DESCRIPTION_ERR: 'Поле Описание содержит запрещенные символы',
  // Поле IMAGE
  IMAGE: 'Заполните поле Обложка!',
  IMAGE_MIN: 'Минимальная длинна поля Обложка 12 символов!',
  IMAGE_NAX: 'Максимальная длинна поля Обложка символа!',
  IMAGE_ERR: 'Поле "Страна" содержит запрещенные символы',
  // Поле TRAILER
  TRAILER: 'Заполните поле Трейлер!',
  TRAILER_MIN: 'Минимальная длинна поля Трейлер 12 символов!',
  TRAILER_MAX: 'Максимальная длинна поля Трейлер 256 символов!',
  TRAILER_ERR: 'Поле "Трейлер содержит запрещенные символы',
  // Поле NAMERU
  NAMERU: 'Заполните поле Название фильма на русском!',
  NAMERU_MIN: 'Минимальная длинна поля Название фильма на русском 2 символа!',
  NAMERU_MAX: 'Максимальная длинна поля Название фильма на русском 100 символов!',
  NAMERU_ERR: 'Поле Название фильма на русском содержит запрещенные символы',
  // Поле NAMEEN
  NAMEEN: 'Заполните поле Оригинальное название фильма!',
  NAMEEN_MIN: 'Минимальная длинна поля Оригинальное название фильма 2 символа!',
  NAMEEN_MAX: 'Максимальная длинна поля Оригинальное название фильма 100 символов!',
  NAMEEN_ERR: 'Поле "Оригинальное название фильма" содержит запрещенные символы',
  // Поле THUMBNAIL
  THUMBNAIL: 'Заполните поле Превью!',
  THUMBNAIL_MIN: 'Минимальная длинна поля Превью 12 символов!',
  THUMBNAIL_MAX: 'Максимальная длинна поля Превью 256 символов!',
  THUMBNAIL_ERR: 'Поле "Превью" содержит запрещенные символы',
};

module.exports = {
  SIGNIN_MSG,
  CREATE_MOVIE_MSG,
  MONGO_URI,
  MONGO_CONFIG,
  JWT_KEY,
  DEFAULT_ALLOWED_METHODS,
  ALLOWED_CORS,
};
