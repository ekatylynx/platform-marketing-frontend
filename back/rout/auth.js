// Импорт необходимых модулей
const { Router } = require("express"); // Импорт модуля Router из Express
const path = require("path"); // Импорт модуля path
const conect = require("../database"); // Импорт подключения к базе данных

// Создание нового экземпляра Router
const router = Router();

const check_Authorization = (result, email, password, res) => {
  result.forEach((data) => {
    // Проверка соответствия email и пароля в базе данных
    if (email == data.email && password == data.password) {
      console.log("Login"); // Логирование успешной попытки входа
      return res.status(200).send(); // Отправка ответа об успехе
    } else {
      console.log("ВЫ авторизовались");
      return res.status(400).send(); // Отправка ответа об ошибке
    }
  });
};

// Обработка GET запросов к корневому пути
router.get("/", (req, res) => {
  // Отправка файла auth.html в качестве ответа
  res.sendFile(path.resolve(__dirname, "..", "layout", "auth.html"));
});

// Обработка POST запросов к корневому пути
router.post("/", (req, res) => {
  const email = req.body.login; // Извлечение email из тела запроса
  const password = req.body.password; // Извлечение пароля из тела запроса

  // Запрос в базу данных для поиска пользователя с указанным email и паролем
  conect.query("SELECT * FROM user", (err, result) => {
    if (err) throw err; // Обработка ошибок базы данных
    const args = [result, email, password, res];

    check_Authorization(...args);
  });
});

// Экспорт модуля router
module.exports = router;
