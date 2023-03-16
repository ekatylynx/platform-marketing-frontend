// Подключение к базе данных MySQL с использованием модуля mysql2
const mysql = require("mysql2");

// Создание объекта подключения, указывающего на параметры соединения с сервером MySQL
const connection = mysql.createConnection({
host: "localhost",
user: "root",
database: "nodejs_reg",
password: "new_password"
});

// Установление соединения с сервером MySQL
connection.connect(function(err){
if (err) {
  return console.error("Ошибка: " + err.message);
}
  else{
  console.log("Подключение к серверу MySQL успешно установлено");
}
});

// Экспорт объекта подключения для использования в других модулях
module.exports = connection