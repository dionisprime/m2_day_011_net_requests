const getRecord = require('./requestFuncModule');

getRecord(50).then((data) => {
    console.log(`Задача: ${data.title} | Выполнение: ${data.completed}`);
});
//-----------------------------------------------------------------

getRecord(500)
    .then((data) => {
        console.log(`Задача: ${data.title} | Выполнение: ${data.completed}`);
    })
    .catch((error) => console.error('Ошибка!'));
//-----------------------------------------------------------------
try {
    getRecord(500)
        .then((data) => {
            console.log(
                `Задача: ${data.title} | Выполнение: ${data.completed}`
            );
        })
        .catch((error) => console.error('Ошибка!'));
} catch (error) {
    console.error(error);
}

//-----------------------------------------------------------------

try {
    getRecord(1).then((data) => {
        console.log(`Задача: ${data.title} | Выполнение: ${data.completed}`);
    });
} catch (error) {
    console.error(error);
}
//-----------------------------------------------------------------

try {
    getRecord(12).then((data) => {
        console.log(`Задача: ${data.title} | Выполнение: ${data.completed}`);
    });
} catch (error) {
    console.error(error);
}
//-----------------------------------------------------------------
// try {
//     getRecord(323).then((data) => {
//         console.log(`Задача: ${data.title} | Выполнение: ${data.completed}`);
//     });
// } catch (error) {
//     console.error(error);
// }

//-----------------------------------------------------------------
