// var name = 'john'

// function printName() {
//     console.log(name)
//     var name = 'peter';
//     console.log(name);
// }

// printName();
// 3 undefined 'Peter'
// ===============  ===============

// for(var i=0;i<10;i++){
// }
// console.log(i);
//10

// ===============  ===============



// function getThis() {
//     return this;
// }
// console.log(getThis());
//window ????
// ===============  ===============

// printMessage();

// function printMessage(){
//     console.log('hello')
// }
// hello
// ===============  ===============
// debugger
// var a=1, b= function a(x) {x &&a(--x); };
// console.log(a);
//1 ????

// ===============  ===============

// (
//     function(a){
//         arguments[0]=10;
//         return a;
//     }
// )(5);
//10 ???
// ===============  ===============

// const details = {
//     name: 'john',
// }

// function getMessage(message){
//     return `${message} ${this.name}`;
// }

// console.log(getMessage.apply(details,['hello']));

//hello john
// ===============  ===============

//Способность функции запоминать переменные из внешней области видимости в момент ее создания
// ===============  ===============


// console.log(message)
// var message = 'hello'

//undefind

// ===============  ===============

// let f = function g(){
//     return 23;
// };

// console.log(typeof g());

// error

// ===============  ===============

// function foo() {
//     return {bar: 1};
// }

// console.log(typeof foo());

//number

// ===============  ===============
// function foo() {
//     console.log(Function.getArguments(this))
// }

// true
// function foo() {
//     console.log(arguments)
// }

// function foo() {
//     console.log(foo.getArguments(this))
// }

// function foo() {
//     console.log(this.arguments)
// }

// foo(1, 3, 3, 4)

// ===============  ===============

// console.log(message)
// let message = 'hello'
// error
// ===============  ===============

let a = function(a,b) { return a+b }

let b = new Function("a,b", "return a+b")

let c = new Function("a", "b", "return a+b")

let d = (a, b) => a + b

let e = (a, b) => { a + b }

// console.log(a(55,12))
// console.log(b(55,12))
// console.log(c(55,12))
// console.log(d(55,12))
// console.log(e(55,12))

// ===============  ===============

// const foo = bar();
// const number = 2;

// function bar() {
//     return number
// }

//=========================

// for(let i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }

// 0 1 2

// ===============  ===============

// let name = 'john';

// function printName() {
//     let name = 'peter';
//     console.log(name);
// }

// printName();
// peter
// ===============  ===============
// "use strict"
// const details = {
//     message: 'hello',
// }

// function getMessage(){
//     return this.message;
// }

// console.log(getMessage.call(details));
//hello
// ===============  ===============

// let name = 'john';

// function printName() {
//     console.log(name);
// }

// setTimeout( () => {
//     let name = 'Peter';
//     printName();
    
// }, 300);

//john

// ===============  ===============

// function foo(a,b) {
//     return a*b;
// }

// const bar = foo.bind(null,2);
// console.log(bar(2))

//4

// ===============  ===============

// var name  = 'John';

// var user = {
//     name: 'peter',
//     printMessage(){
//         console.log(`hello, ${this.name}`)
//     }
// };

// var printMessage = user.printMessage;
// printMessage();
// john or ubdefidesdd
// prefer Jonh
// ===============  ===============
// "use strict"
// function getThis() {
//     return this;
// }
// console.log(getThis());

// undefined

// ===============  ===============

// function foo() { console.log(this)}
// foo.call(null)
// window

// ===============  ===============
// for(var i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i)
//     },300)
// }
