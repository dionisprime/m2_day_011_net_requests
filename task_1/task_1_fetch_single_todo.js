fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => {
        console.log(`Задача: ${data.title} | Выполнение: ${data.completed}`);
    })
    .catch((error) => console.error('Ошибка!'));

fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then((response) => response.json())
    .then((data) => {
        console.log(`Задача: ${data.title} | Выполнение: ${data.completed}`);
    })
    .catch((error) => console.error('Ошибка!'));

fetch('https://example.com/data.json') // несуществующий адрес
    .then((response) => response.json())
    .then((data) => {
        console.log(`Задача: ${data.title} | Выполнение: ${data.completed}`);
    })
    .catch((error) => console.error('Ошибка!')); // ошибка
