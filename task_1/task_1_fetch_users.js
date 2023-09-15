// Вывод юзеров

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        let userList = data;
        return userList;
    })
    .then((userList) => {
        userList.forEach((user) => {
            console.log(
                `Юзер: ${user.name} | емейл: ${user.email} | Город: ${user.address.city}`
            );
        });
    });
