// Загрузка всех 200 тасок с сайта
fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => response.json())
    .then((data) => {
        let todoList = data; // объявление todoList и присвоение массива тасок
        return todoList;
    })
    .then((todoList) => {
        showTasksByUserId(1, todoList); // использование функции которая фильтрует таски по ID пользователя
    });

// функция которая фильтрует таски по ID пользователя
const showTasksByUserId = (userId, todoList) => {
    console.log(`Задачи пользователя с ID ${userId}:`);
    todoList
        .filter((task) => task.userId === userId)
        .forEach((task) => {
            console.log(
                `Задача: ${task.title} | Выполнение: ${task.completed}`
            );
        });
};
