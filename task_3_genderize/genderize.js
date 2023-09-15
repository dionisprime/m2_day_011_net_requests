const readline = require('readline').createInterface({
    // создаем интерфейс
    input: process.stdin, // ввод через консоль
    output: process.stdout, // вывод. через консоль
});

function checkGender() {
    readline.question('What is your name? (or enter Q to exit) ', (name) => {
        const firstName = name.trim(); // trim() убирает возможные пробелы перед и после слова

        if (firstName.toUpperCase() === 'Q') {
            console.log('Exiting the program');
            readline.close();
            return;
        }

        const serverUrl = 'https://api.genderize.io';
        const url = `${serverUrl}?name=${firstName}`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.gender === null) {
                    console.log(
                        `The gender for "${firstName}" could not be determined.`
                    );
                } else {
                    console.log(`${firstName} is ${data.gender}.`);
                }
            })
            .then(() => {
                checkGender();
            })
            .catch((error) => {
                console.error('Error:', error);
                checkGender();
            });
    });
}

checkGender();
