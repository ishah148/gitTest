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

function nouveau(Constructor, ...args) {
    console.log(...args)
    console.log(Constructor)
    let obj1 = Object.create(Constructor.prototype);
    let obj2 = Constructor.apply(obj1, args);
    if ((typeof obj2 === 'object' || typeof obj2 === 'function') && obj2 !== null) {
        return obj2
    } else {
        return obj1
    }
}

//Fun with ES6 Classes #6 - Fake Files (Basic)
class File {
    constructor(fullName, contents) {
        this._contents = contents;
        this.lineCounter = contents.split('\n').length;
        this.currentLineCounter = 0;
        this.contentLength = contents.length;
        this.currentCharCounter = 0;
        Object.defineProperties(this, {
            // fullName: { value: fullName },
            filename: { value: fullName.replace(/\.\w+$/m, '') },
            extension: { value: (fullName.match(/\w+$/m) || [])[0] }
        });
        this.fullname = null;
        Object.defineProperty(this, 'fullName', {
            enumerable: false,
            writable: false,
            configurable: false,
            value:fullName,
        })
        // this.filename = fullName.replace(/\.\w+$/m, '')
        // Object.freeze(this.filename)
    }

    getContents() {
        return this._contents;
    }

    set contents(value) {
        this._contents = value;
        this.lineCounter = value.split('\n').length;
        this.currentLineCounter = 0;
        this.contentLength = value.length;
        this.currentCharCounter = 0;
    }

    get contents() {
        return this._contents;
    }

    write(str) {
        if (!this.contents.length) {
            this.contents = `${str}`;
        } else {
            this._contents += `\n${str}`;
            this.lineCounter++;
        }
        this.contentLength += str.length;
    }

    gets() {
        if (this.currentLineCounter > this.lineCounter) {
            return undefined;
        }
        return this.contents.split('\n')[this.currentLineCounter++];
    }

    getc() {
        if (this.contentLength === 0 || this.currentCharCounter > this.contentLength)
            return undefined;
        return this.contents[this.currentCharCounter++];
    }
}


Array.prototype.reduce = function (callback, initial) {
    let result;
    let i;
    if (initial === undefined || initial === null) {
        result = this[0];
        i = 1;
    }
    if (initial) {
        result = initial;
        i = 0;
    }

    for (i; i < this.length; i++) {
        result = callback(result, this[i])
    }
    return result
}


function randInt(max) {
    return Math.floor(Math.random() * max);
}

function generateName() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charsLength = chars.length;
    let result;
    do {
        result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(randInt(charsLength));
        }
    } while (photoManager.nameExists(result))
    return result;
}

a = new Event()
// simple events
function Event() {
    this.handlers = [];
}
Event.prototype = {
    subscribe: function (fn) {
        this.handlers.push(fn);
    },
    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter((handler) => {
            return fn === handler ? false : true;
        })
    },
    emit: function (...args) {
        this.handlers.forEach((handler) => {
            handler(...args);
        })
    }
}
function undoRedo(object) {
    return object.defineProperty(this, 'fuck codewars')
}

function undoRedo(object) {
    let undo = [];
    let storage = [];
    return {
        set: function (key, value) {
            if (object.hasOwnProperty(key)) {
                storage.push(['change', key, object[key], value]);
            } else {
                storage.push(['set', key, value]);
            }
            object[key] = value;
            undo = [];
        },
        get: (key) => object[key],
        del: (key) => {
            if (object[key]) {
                storage.push(['del', key, object[key]]);
                delete object[key];
                undo = [];
            }
        },
        undo: () => {
            if (!storage) {
                throw new Error('No operation to undo');
            }
            let lastOperation = storage.pop();
            if (lastOperation[0] === 'set') {
                delete object[lastOperation[1]];
            }
            if (lastOperation[0] === 'change' || lastOperation[0] === 'del') {
                object[lastOperation[1]] = lastOperation[2];
            }
            undo.push(lastOperation);
        },
        redo: () => {

            let lastUndo = undo.pop();
            if (lastUndo[0] === 'del') {
                delete object[lastUndo[1]];
            }
            if (lastUndo[0] === 'change') {
                object[lastUndo[1]] = lastUndo[3];
            }
            if (lastUndo[0] === 'set') {
                object[lastUndo[1]] = lastUndo[2];
            }
            if (!undo) {
                throw new Error('No operations to redo undo');
            }
            storage.push(lastUndo);
        }
    };
}

let history = [];
function undoRedo(object) {
    let canRedo = false;
    let lastUndoOperation = null;
    return {
        set: function (key, value) {
            history.push([key, object[key]])
            object[key] = value;
            canRedo = false;
        },
        get: function (key) {
            canRedo = false; //! may be we don't need it here
            return object[key];
        },
        del: function (key) {
            history.push([key, object[key]])
            delete object[key]
            canRedo = false;
        },
        undo: function () {
            try {
                if (!history.length) {
                    throw (new Error('no operation to undo'))
                } else {
                    let lastCall = history.pop();
                    lastUndoOperation = lastCall;
                    object[lastCall[0]] = lastCall[1];
                    canRedo = true;
                }
            } catch (err) {
                console.log(err.message)
            }

        },
        redo: function () {
            try {
                if (canRedo) {
                    if (!history.length) {
                        throw (new Error('no operation to redo'));
                    } else {
                        // this.undo();
                        object[lastUndoOperation[0]] = lastUndoOperation[1];
                    }
                }
            } catch (err) {
                console.log(err.message)
            }

        }
    };
}


var Cat = (function () {
    const catsArr = [];
    class Cat {
        constructor(name, weight) {
            if (!name || !weight)
                throw Error('Enter two parameters');
            Object.defineProperty(this, 'name', {
                get: function () {
                    return name
                }
            });
            Object.defineProperty(this, 'weight', {
                get: function () {
                    return weight
                },
                set: function (value) {
                    return weight = value
                }
            });
            catsArr.push(this);
        }
        static averageWeight() {
            return catsArr.reduce((sum, cat) => (sum + cat.weight), 0) / catsArr.length;
        }
    }
    return Cat;
}());