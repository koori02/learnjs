/*
function test(param1, param2, param3){
    console.log("param1: " + param1);
    console.log("param2: " + param2);
    console.log("arguments[0]: " + arguments[0]);
    console.log("arguments[1]: " + arguments[1]);

    arguments[1]=100;
//    param2 = 10;
    console.log("param1: " + param1);
    console.log("param2: " + param2);
    console.log("arguments[0]: " + arguments[0]);
    console.log("arguments[1]: " + arguments[1]);

    console.log(arguments.length)
    console.log(arguments.callee.length)
}

var nums = new Array();
for(var i= 0; i<3; i++){
    nums.push(i);
}
*/

/*
var person = {};
Object.defineProperties(person, {
   _inner: {
       value: "ann"
   },
    name: {
        get: function(){
            return this._inner;
        },
        set: function(value){
            this._inner = value;
        }
    }
});

console.log(Object.getOwnPropertyDescriptor(person, "_name"));
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(person.name);
person.name = "tom";
console.log(person.name);
console.log("-----")

function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        alert("Hi, I'm " + this.name);
    }
}

var p1 = new Person("ann", 20);
console.log(p1.constructor == Person);

Person("global", 0);
console.log(window.name)
console.log(window.age)
console.log("---")



function People(){}
People.prototype.name = "Tom";
People.prototype.age = 30;
People.prototype.sayHi = function(){
    return "hi, I'm " + this.name;
}

console.log(People.prototype)
console.log(People.prototype.constructor)
//console.log(People.prototype.constructor == People)
//console.log(typeof People)
//console.log(typeof People.prototype)

var peo1 = new People();
console.log(peo1.__proto__);
console.log(Object.getPrototypeOf(peo1))

console.log("-----")


function Empty(){}
Empty.prototype.name = "empty";
//Empty.prototype.msg = function(){console.log("hello")};
var empty = new Empty();
console.log(Empty.prototype);
console.log(Empty.prototype.constructor);
console.log(empty.__proto__.__defineGetter__);

console.log(Object.getPrototypeOf(empty))
console.log(Empty.prototype.isPrototypeOf(empty));

console.log("@@@")
console.log(Object.prototype)
console.log(Object.constructor)
var obj = new Object()
console.log(obj.__proto__)

console.log(String.prototype)
 */

//function Root(){
//    this.name = "root";
//}
//Root.prototype.getName = function(){
//    return this.name;
//}
//
//function Leaf(){
//    this.name = "leaf";
//}
//Leaf.prototype = new Root();
//Leaf.prototype.say = function(){
//    return "I'm " + this.name;
//}
//
//var leaf = new Leaf();
//console.log(leaf.say());
//
//console.log("Root.prototype: ");
//console.log(Root.prototype);
//console.log("Leaf.prototype: ");
//console.log(Leaf.prototype);
//console.log("leaf.__proto__: ");
//console.log(leaf.__proto__);
//console.log("leaf.constructor: ")
//console.log(leaf.constructor)
//
//for(var i=0; i<5; ++i){
//    var secret = (((Math.random()+1)*0x10000000)|0).toString(16)+(((Math.random()+1)*0x10000000)|0).toString(16);
//    console.log(secret);
//}


var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        console.log("1: " + this);
        console.log(this.name);
        return function(){
            console.log("1: " + this);
            console.log(this.name);
            return this.name;
        };
    }
};
var tmp = object.getNameFunc();
var name = tmp();
console.log(name);



//var name = "The Window";
//var object = {
//    name : "My Object",
//    getNameFunc : function(){
//        console.log("1: " + this);
//        console.log(this.name);
//        var that = this;
//        console.log("1: " + that);
//        console.log(that.name);
//        return function(){
//            console.log("2: " + this);
//            console.log(this.name);
//            console.log("2: " + that);
//            console.log(that.name);
//            return that.name;
//        };
//    }
//};
//var tmp = object.getNameFunc();
//var name = tmp();
//console.log(name);


//console.log(document.documentElement.clientHeight);
//console.log(document.documentElement.clientWidth);
//for(var p in document){
//    console.log(p);
//}



console.log(__dirname);
console.log(__filename);




















/*
console.log(nums);
console.log(nums.valueOf());
nums.push('r','t');
console.log(nums.toLocaleString());
console.log(nums.toString());
nums.pop();
console.log(nums.join("@"))
var tmp = nums.shift();
console.log(nums);
console.log(tmp)
nums.unshift("aaa", 'bbb');
nums.unshift('ccc')
console.log(nums)

console.log(nums.reverse())
console.log(nums.sort())

function comp(v1, v2){
    return v1-v2;
}

var arr = new Array(2,35,10,1,13)
console.log(arr.sort())
console.log(arr.sort(comp))
console.log(arr)

var chars2 =  ['a','b','c','d','e','d','c','b'];

console.log(chars2.lastIndexOf('d',5))
*/