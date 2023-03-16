// Импорт необходимых модулей
const { Router } = require("express"); // Импорт модуля Router из Express
const path = require("path"); // Импорт модуля path
const nodemailer = require("nodemailer"); // Импорт модуля nodemailer
const router = Router();

// Создание экземпляра Transporter для отправки электронных писем
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "grisha211211@gmail.com",
    pass: "ltfgjpstqalkcdgo",
  },
});

// Обработка GET запросов к корневому пути
router.get("/", (req, res) => {
  // Отправка файла email.html в качестве ответа
  res.sendFile(path.resolve(__dirname, "..", "layout", "email.html"));
});

// Обработка POST запросов к корневому пути
router.post("/", (req, res) => {
  const mail = req.body.email; // Извлечение email из тела запроса
  transporter;
  // Создание объекта message для электронного письма
  const message = {
    from: "Zhulebino grisha211211@gmail.com",
    to: mail,
    subject: "Zhulebino",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
  };
  // Отправка электронного письма
  transporter.sendMail(message);
  res.status(200);
});

// Экспорт модуля router
module.exports = router;
