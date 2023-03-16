// Импортируем необходимые библиотеки: express, mysql и роуты для обработки запросов
const express = require('express')
const email = require('./rout/email')
const auth = require('./rout/auth')
const register = require('./rout/register')
const mysql = require('mysql')

// Создаем экземпляр приложения express
const app = express()

// Устанавливаем номер порта, который будет слушать сервер
const PORT = process.env.PORT || 3001

// Указываем путь до папки с файлами для статического размещения
app.use(express.static('layout'))

// Добавляем обработку запросов с использованием метода middleware для разбора входных данных 
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Добавляем маршрут для обработки запросов на авторизации
app.use('/', auth)

// Добавляем маршрут для обработки запросов на регистрацию
app.use('/register', register)

// Добавляем маршрут для обработки запросов на отправку электронную почту
app.use('/email', email)

//Запускаем прослушивание сервера на выбранном порте
app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}...`)
})
