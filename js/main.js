// Напишите функцию-генератор паролей. Пароль должен быть из 8 случайных символов,
// состоять из строчных и заглавных букв, а также цифр.
// Пример выводы функции - jXfPEUlt
// Дополнительное условие: написать функцию как можно короче.
// Подсказка: погуглить и использовать модуль Math.random()



/*function generatePassword() {
    let length = 8;
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$*&';
    let resultValue = '';
    for (let i = 0; i <= 8; i++) {
        let randomVal = Math.floor(Math.random() * charset.length);
        resultValue += charset[randomVal];
    }
    return resultValue;
}

console.log(generatePassword());*/

/*let arr = [1, 3, 5, 7, 9];
let minSum = 0;
let maxSum = 0;
for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
}


for (let i = 1; i < arr.length; i++) {
    maxSum += arr[i];
}
console.log(minSum);
console.log(maxSum);*/


//решаем массив с помощью метода reduce без цикла
/*let arr = [1, 3, 5, 7, 9];
let minAndMaxSum = function (arr) {
    //reduce(a,b)-a-eto previous value,b is a current value
    //Math.min()
    //(...arg)-распаковали массив
    let sum = arr.reduce((a, b) => a + b);
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);
    console.log(sum - maxValue, sum - minValue);
}

minAndMaxSum(arr);*/



//Создайте любой объект с несколькими свойствами и один метод который будет выдавать в консоле
//все ключи и значения этого объекта


/*let obj = {
    name: 'Tom',
    age: 23,
    llgl: 'lol',

    sayValue: () => { //this не работает в стрелочной функции
        console.log(this);
    },
    newObj: {
        title: 'Barcelona',
        years: 1999,

        sayObjValue() {
            console.log(this);
        }
    }
}




obj.sayValue();
obj.newObj.sayObjValue();*/

//Создайте два объекта со свойствами language и framework
//Затем отд создайте функцию который выводит свойства объекта Примените ункцию этим двум объектам
/*let obj1 = {
    language: 'js',
    framework: 'react',
}

let obj2 = {
    language: 'python',
    framework: 'node ',
}



function describe() {
    console.log(`language:${this.language} framework:${this.framework}`);

}

//добавляем внешнюю функцию в объекты
obj1.describe = describe;
obj2.describe = describe;

console.log(obj1);
console.log(obj2);
obj1.describe();
obj2.describe();*/


//Вывести сумму всех цифр заданного числа




//task with elevator
let elevator = {
    minLevel: 1,
    maxLevel: 16,
    currentLevel: 1,
    printfloor: function () {
        console.log(`Вы на ${this.currentLevel} этаже`);
    },
    upOneFloor() {
        if (this.currentLevel === 16) {
            alert("Выше некуда");
            return;
        }
        this.currentLevel++;
        console.log(`Вы на ${this.currentLevel} этаже`);
    },
    downOneFloor: function () {
        if (this.currentLevel === 1) {
            alert("Ниже некуда!!!");
            return
        }

        this.currentLevel--;
        console.log(`Вы на ${this.currentLevel} этаже`);
    },
    toFloor(toLevel) {
        if (toLevel > 16 && toLevel < 1) {
            if (this.currentLevel < toLevel) {
                for (let i = this.currentLevel; i < toLevel; i++) {
                    this.upOneFloor();
                }
            } else {
                for (let i = this.currentLevel; i > toLevel; i--) {
                    this.DownOneFloor();

                }
            }


        }



    }




//elevator.printfloor();
//elevator.upOneFloor();
//elevator.downOneFloor();
elevator.toFloor();
