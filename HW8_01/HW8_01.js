// 1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.

function statistic(string = prompt("Введите строку для получения статистики")) {
    let letters = string.replace(/\d*\s*[.,]*/g, '').length,
        numbers = string.replace(/ *[a-z]*[а-я]*[.,]*/gi, '').length,
        symbols = string.replace(/ *[0-9]*[a-z]*[а-я]*/gi, '').length;
    alert(`В вашей строке - ${letters} букв, ${numbers} цифр и ${symbols} дугих знаков.`)
}

// 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

function text(number = prompt("Введите двухзначное число")) {
    numberArr = number.split("");
    let dozens = "",
        units = "",
        alt = "";
    if (number > 9 && number < 20) {
        switch (Number(number)) {
            case 10:
                alt = "десять";
                break;
            case 11:
                alt = "одинадцать";
                break;
            case 12:
                alt = "двенадцать";
                break;
            case 13:
                alt = "тринадцать";
                break;
            case 14:
                alt = "четырнадцать";
                break;
            case 15:
                alt = "пятнадцать";
                break;
            case 16:
                alt = "шестнадцать";
                break;
            case 17:
                alt = "семнадцать";
                break;
            case 18:
                alt = "восемнадцать";
                break;
            case 19:
                alt = "девятнадцать";
                break;
            default:
                break;
        }
        alert(alt);
    } else if (number >= 20) {
        switch (Number(numberArr[0])) {
            case 2:
                dozens = "двадцать";
                break;
            case 3:
                dozens = "тридцать";
                break;
            case 4:
                dozens = "сорок";
                break;
            case 5:
                dozens = "пятдесят";
                break;
            case 6:
                dozens = "шестдесят";
                break;
            case 7:
                dozens = "семдесят";
                break;
            case 8:
                dozens = "восемьдесят";
                break;
            case 9:
                dozens = "девяносто";
                break;
            default:
                break;
        }
        switch (Number(numberArr[1])) {
            case 1:
                units = "один";
                break;
            case 2:
                units = "два";
                break;
            case 3:
                units = "три";
                break;
            case 4:
                units = "четыре";
                break;
            case 5:
                units = "пять";
                break;
            case 6:
                units = "шесть";
                break;
            case 7:
                units = "семь";
                break;
            case 8:
                units = "восемь";
                break;
            case 9:
                units = "девять";
                break;
            default:
                break;
        }
        alert(dozens + " " + units);
    }
}

// 3. Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.

function replaceString(string = prompt("Введите строку")) {
    string = string.split("");
    newString = "";
    for (const iterator of string) {
        newString += iterator === iterator.toUpperCase() ? iterator.toLocaleLowerCase() : iterator.toUpperCase();
    }
    alert(newString.replace(/[0-9]/g, "_"));
}

// 4. Написать функцию, которая преобразует названия css - стилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, text-align в textAlign.

function styles(string = prompt("Введите названия css - стилей с дефисом")) {
    string = string.split("-");
    let outerString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[0]) {
            outerString += string[i].charAt(0).toLocaleUpperCase() + string[i].slice(1);
        } else {
            outerString += string[i];
        }
    }
    alert(outerString);
}

// 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. Например: cascading style sheets в CSS, объектно ориентированное программирование в ООП.

function abbreviation(string = prompt("Введите текст для преобразование в аббревиатуру")) {
    string = string.split(" ");
    let abbreviation = "";
    for (const iterator of string) {
        abbreviation += iterator.charAt(0).toLocaleUpperCase();
    }
    alert(abbreviation);
}

// 6. Написать функцию, которая принимает любое коли чество строк, объединяет их в одну длинную строку и возвращает ее.

function concat(string = "") {
    let triger = true;
    do {
        let text = prompt("Введите строку");
        if (!text) {
            string = "Ничего не введено";
            break;
        } else {
            string += text + " ";
            triger = confirm("Добавить еще одну строку?")
        }
    } while (triger);
    alert(string);
    // alert(string.replace(/ /g, ''));
}

// 7. Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.

function calc(string = prompt("Введите условие для подсчета")) {
    if (!string) {
        string = "Ничего не введено";
    } else {
        string = eval(string);
    }
    alert(string);
}

// 8. Написать функцию, которая получает url и выводит подробную информацию о нем. Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.

function urlInfo(string = prompt("Введите url")) {
    string = string.split("//");
    let proto = string[0].replace(/[:]/g, ''),
        temp = string[1].split("/"),
        domane = temp[0];
    path = string[1].replace(domane, '');
    alert(`Протокол : ${proto}, домен : ${domane}, путь : ${path}`);
}

// 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”. Выполняя задание, не используйте функцию split().

function seporate(string, exp) {
    string = prompt("Введите строку");
    exp = prompt("Введите разделитель");
    let arr = [],
        start = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == exp || string.length == i + 1) {
            if (string.length == i + 1) {
                arr.push(string.slice(start));
            } else {
                arr.push(string.slice(start, i));
                start = i + 1;
            }
        }
    }
    alert(arr);
}

// 10. Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо %индекс необходимо вывести значение соответствующего входного параметра. Например: print(“Today is %1 %2.%3.%4”, Monday, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.

function templateString(template, string) {
    template = prompt("Введите шаблон");
    string = prompt("Введите строку").replace(/\s/g, '');
    string = string.split(",");
    let newString = "";
    for (let i = 0; i < template.length; i++) {
        if (template[i] == "%") {
            let temp = template[i + 1] - 1;
            newString += string[temp];
            i++;
        } else {
            newString += template[i];
        }
    }
    alert(newString);
}
