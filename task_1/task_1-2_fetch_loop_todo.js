// вывод задач с запросами, через цикл for
for (let i = 1; i <= 10; i++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(
                `Задача: ${data.title} | Выполнение: ${data.completed}`
            );
            return data;
        });
}
