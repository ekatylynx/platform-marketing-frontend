// Импорт необходимых модулей
const {Router} = require('express') // Импорт модуля Router из Express
const path = require('path') // Импорт модуля path
const connection = require('../database') // Импорт модуля connection для работы с базой данных

const router = Router()

// Обработка GET запросов к корневому пути
router.get('/', (req, res) => {
// Отправка файла register.html в качестве ответа
res.sendFile(path.resolve(__dirname, '..', 'layout', 'register.html'))
})

// Обработка POST запросов к корневому пути
router.post('/', (req, res) => {
// Извлечение данных из тела POST запроса
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.regpassword

// Создание SQL запроса для добавления нового пользователя в базу данных
    const sql = `INSERT INTO user(firstname, lastname, email, password) VALUES('${firstname}', '${lastname}', '${email}', '${password}')`;

// Проверка наличия всех необходимых полей в теле запроса
    if(!firstname || !lastname || !email || !password) {
    // Если не все поля заполнены, отправить ошибку 400 с сообщением об ошибке
        return res.status(400).send('Введите все поля');
    } else{
    // Если все поля заполнены, выполнить SQL запрос для добавления нового пользователя в базу данных
        connection.query(sql, (err, result) =>{
            if(err) {
            // Если произошла ошибка при выполнении запроса, отправить ошибку 400 с сообщением об ошибке
                return res.status(400).send();
            }else{
            // Если запрос выполнен успешно, перенаправить пользователя на главную страницу
                return res.status(200).send()
            }
        })
    }
})

// Экспорт модуля router
module.exports = router
