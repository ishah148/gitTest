Array.prototype.map = function (fn) {
    return this.reduce((resArr, item) => {
        resArr.push(fn(item));
        return resArr;
    }, [])
}


class Animal {
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }
    toString() {
        return `${this._name} is a ${this._type}`
    }
    get type() {
        return this._type
    }
    get name() {
        return this._name;
    }
    set name(x) {
        this._name = x
    }
}


class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`
    }
}





//Fun with ES6 Classes #4 - Cubes and Setters
class Cube {
    constructor(length) {
        this.length = length;
    }

    set surfaceArea(value) {
        this.length = Math.sqrt(value / 6);
    }

    get surfaceArea() {
        return (this.length ** 2) * 6
    }

    set volume(value) {
        this.length = Math.cbrt(value)
    }

    get volume() {
        return this.length ** 3
    }

}


Object.prototype.hash = function (string) {
    let properties = string.split('.')
    return properties.reduce((result, i) => {
        return result = result[i] && undefined
    }, this)
}


// [[Prototype]] - // указывает на прототип объекта (ссылается на родителя)
// __proto__     - // geter setter для [[Prototype]] устевший ситаксис
// Object.getPrototypeOf();Object.setPrototypeOf() //-новый синтаксис
// prototype // ТОЛЬКО У КОНСТРУКТОРА


// function User() {
//     this.name = 'djfhgo';
//     this.age = 32;
//     prototype = {
//         constructor:User,
//     }
// }

// User.prototype = {

// }

// let alina = new User();

// Array.prototype.red = function() {
//     console.log('smb')
// }

// let arr = new Array(1,2,3,4)

// arr.red
// arr.red()

// .red()
// .red => 5
// tg.send()
// if(tg.sendStatus // getter){changeStatus()}

// Object.defineProperty(Person.prototype, 'name', {
//     value: 'pet',
//     writable, // позволяет переписать св-ва
//     enumerable,
//     configurable,
// });


// Object.defineProperties(Person.prototype, {
//     name: {
//         get() {
//             return `${ this.firstName } ${ this.lastName }`
//         },
//         set(value) {
//             [this.firstName, this.lastName] = value.split(' ')
//         }
//     },
//     enumerable,   // перибираемый for in
//     configurable, // позволяет изм. дескрипторы и удалять св-ва
// });



Object.defineProperty(Person.prototype, 'name', {
    get() {
        return `${this.firstName} ${this.lastName}`
    },
    set(value) {
        [this.firstName, this.lastName] = value.split(' ')
    },
});



//Array helpers
Array.prototype.square = function () {
    return this.map((i) => Math.pow(i, 2))
}

Array.prototype.cube = function () {
    return this.map((i) => Math.pow(i, 3))
}

Array.prototype.average = function () {
    if (!this.length) {
        return NaN;
    }
    return this.reduce((res, i) => {
        return res + i;
    }, 0) / this.length;
}


Array.prototype.sum = function () {
    return this.reduce((res, i) => {
        return res + i;
    }, 0)
}


Array.prototype.even = function () {
    return this.filter((i) => i % 2 === 0)
}

Array.prototype.odd = function () {
    return this.filter((i) => i % 2 !== 0)
}

function nouveau (Constructor, ...args) {
    console.log(...args)
    console.log(Constructor)
    let obj1 = Object.create(Constructor.prototype);
    let obj2 = Constructor.apply(obj1,args);
    if((typeof obj2 === 'object' || typeof obj2 === 'function') && obj2 !== null){
        return obj2
    }else{
        return obj1
    }
}