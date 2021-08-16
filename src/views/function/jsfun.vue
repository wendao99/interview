<!--  -->
<template>
  <div class="jsfun">
    <h1>Array</h1>
    <test-fun :data="arrList"></test-fun>
    <h1>String</h1>
    <test-fun :data="strList"></test-fun>
    <h1>Json</h1>
    <test-fun :data="jsonList"></test-fun>
    <h1>Object</h1>
    <test-fun :data="objectList"></test-fun>
    <h1>Javascript的三种判断一个值的类型的办法</h1>
    <test-fun :data="objectList"></test-fun>
    <h1>Math.xxx</h1>
    <test :data="mathList" > </test>
  </div>
</template>

<script>
import TestFun from '@/components/TestFun'
import Test from '@/components/Test'
export default {
  components: {
    TestFun,
    Test
  },
  data () {
    return {
      arrList: [
        {
          id: 1,
          title: "用来对数组进行去重。",
          answer: `new Set()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
console.log(new Set(arr)); // {3,4,5,6,7}
const a = Array.from(new Set(arr)) // [3, 4, 5, 6, 7]`
        },
        {
          id: 2,
          title: "对数组元素进行排序（改变原数组）。",
          answer: `sort()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
console.log(arr.sort()) // [3, 4, 4, 4, 5, 5, 6, 7]`
        },
        {
          id: 3,
          title: "反转数组中的元素（改变原数组）。",
          answer: `reverse()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
conosle.log(arr.reverse());  // [7, 6, 5, 5, 4, 4, 4, 3]`
        },
        {
          id: 4,
          title: "删除一个数组成员，会形成空位，并不会影响length属性（改变原数组）,同样适用于对象。",
          answer: `delete()`,
          usage: `//数组
const arr = [3,4,4,5,4,6,5,7];
delete arr[1];
conosle.log(arr); // [3, empty, 4, 5, 4, 6, 5, 7]
//对象
const obj = {name: 'pboebe',age: '23',sex: '女'};
delete obj.sex;
console.log(obj); // {name: "pboebe", age: "23"}`
        },
        {
          id: 5,
          title: "把数组的第一个元素从其中删除，并返回第一个元素的值（改变原数组）。",
          answer: `shift()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
const a = arr.shift(); // 3
console.log(arr); // [empty, 4, 5, 4, 6, 5, 7]`
        },
        {
          id: 6,
          title: "向数组的起始处添加一个或多个元素,并返回新的长度（改变原数组）。",
          answer: `unshift()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
const a = arr.unshift(8);
console.log(a); // 9(a为返回的数组的新长度)
console.log(arr); // [8, 3, 4, 4, 5, 4, 6, 5, 7]`
        },
        {
          id: 7,
          title: "在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度（改变原数组）。",
          answer: `push()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
const a = arr.push(8,9);
console.log(a); // 10(a为返回的数组的新长度)
console.log(arr); // [3, 4, 4, 5, 4, 6, 5, 7, 8, 9]`
        },
        {
          id: 8,
          title: "返回数组本身。",
          answer: `valueOf()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
console.log(arr.valueOf()); // [3,4,4,5,4,6,5,7]`
        },
        {
          id: 9,
          title: "可把值转换成字符串。",
          answer: `toString()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
console.log(arr.toString()); // 3,4,4,5,4,6,5,7`
        },
        {
          id: 10,
          title: "在原始数组尾部添加另外数组组成新数据（字符串适用）。",
          answer: `concat()`,
          usage: `//数组
const a = [1,2,3];
const b = [4,5];
const c = a.concat(b); // [1, 2, 3, 4, 5]
//字符串
const x = 'abc';
const y = 'def';
const z = x.concat(y); // abcdef`
        },
        {
          id: 11,
          title: "以参数作为分隔符，将所有数组元素组成一个字符串返回（一般默认逗号隔开）。",
          answer: `join()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
console.log(arr.join('-')); // 3-4-4-5-4-6-5-7`
        },
        {
          id: 12,
          title: "用于提取原来数组的一部分，会返回一个提取的新数组，原数组不变（字符串适用,不包括end)。",
          answer: `slice(start, end)`,
          usage: `//数组
const arr = [3,4,4,5,4,6,5,7];
const a = arr.slice(2, 5); // [4, 5, 4]
//字符串
const x = 'abcdefgh';
const y = x.slice(3, 6); // def`
        },
        {
          id: 13,
          title: "用于删除原数组的一部分，并且可以在删除的位置添加新的数组成员，返回值是被删除的数组元素。（改变原数组）",
          answer: `splice()`,
          usage: `splice（t, v, s）t:被删除元素的起始位置；v：被删除元素个数；s:s以及后面的元素为被插入的新元素。

const arr = [3,4,4,5,4,6,5,7];
const a = arr.splice(3, 2, 12); // [5, 4]
console.log(arr); // [3, 4, 4, 12, 6, 5, 7]`
        },
        {
          id: 14,
          title: "依次遍历数组成员，根据遍历结果返回一个新数组。",
          answer: `map()`,
          usage: `（map方法同样适用于字符串，但是不能直接调用，需要通过函数的call方法，间接使用，或者先将字符串川转为数组，再使用）（不会改变原始数组）。
const arr = [3,4,4,5,4,6,5,7];
const a = arr.map(item => item*2;) // [6, 8, 8, 10, 8, 12, 10, 14]`
        },
        {
          id: 15,
          title: "遍历数组，区别是无返回值。",
          answer: `forEach()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
arr.forEach(function(value,index,arr){console.log(value)}))`
        },
        {
          id: 16,
          title: "一个过滤方法，参数是一个函数，所有的数组成员依次执行该函数，返回结果为 true 的成员组成一个新数组返回。（不会改变原始数组）。",
          answer: `filter()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
const a = arr.filter(item => item % 3 > 1);
console.log(a); // [5, 5]`
        },
        {
          id: 17,
          title: "这两个方法类似于“断言”（ assert ），用来判断数组成员是否符合某种条件。",
          answer: `some() & every()`,
          usage: `some方法是只要有一个数组成员的返回值为true，则返回true，否则false；
every方法是需要每一个返回值为true，才能返回true，否则为false;

const arr = [3,4,4,5,4,6,5,7];
console.log( arr.some( function( item, index, array ){
	console.log( 'item=' + item + ',index='+index+',array='+array );
	return item > 3;
}));
//  item=3,index=0,array=3,4,4,5,4,6,5,7
//   item=4,index=1,array=3,4,4,5,4,6,5,7
//   true
console.log( arr.every( function( item, index, array ){
	console.log( 'item=' + item + ',index='+index+',array='+array );
	return item > 3;
}));
// item=3,index=0,array=3,4,4,5,4,6,5,7
//false`
        },
        {
          id: 18,
          title: "依次处理数组的每个成员，最终累计成一个值。",
          answer: `reduce()`,
          usage: `a:必填，累计变量；b：必填，当前变量；x: 可选，当前位置；y:可选，原数组。

// reduce(a, b, x, y)
// 简单用法
const arr = [3,4,4,5,4,6,5,7];
const a = arr.reduce((pre, cur) => {return pre+cur})
// 逗号写法
const a = arr.reduce((pre, cur) => (sum= pre+cur, sum))
console.log（a） // 38
//高级用法（举个数组去重和数组扁平化栗子）
const b = arr.reduce((pre, cur) => {
	if(!pre.includes(cur)) {
		return pre.concat(cur)
    } else {
		return pre
    }
}, [])
// [3, 4, 5, 6, 7]
const arrs = [[2,3,2], [3,4,5]]
const c = arr.reduce((pre, cur) => {
	return pre.concat(cur)
}, [])
// [2, 3, 2, 3, 4, 5]
复制代码
reduce 的用法还有很多，可自行各种尝试。`
        },
        {
          id: 19,
          title: "与 reduce 方法使用方式相同，区别在于 reduceRight 方法从右到左执行（例子略过）。",
          answer: `reduceRight()`,
          usage: `let numbers = [65, 44, 12, 4];
 
function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    document.getElementById("demo").innerHTML = numbers.reduceRight(getSum);
}`
        },
        {
          id: 20,
          title: "返回给定元素在数组中的第一次出现的位置，如果没有则返回-1(同样适用于字符串)。",
          answer: `indexOf()`,
          usage: `//数组
const arr = [3,4,4,5,4,6,5,7];
console.log(arr.indexOf(4)) // 1
console.log(arr.indexOf('4'))  // -1
//字符串
conststring = 'asdfghj';
console.log(string.indexOf('a')) // 0`
        },
        {
          id: 21,
          title: "返回给定元素在数组中最后一次出现的位置，没有返回-1(同样适用于字符串)。",
          answer: `lastIndexOf()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
console.log(arr.lastIndexOf(4))
// 4(从左到右数最后出现的位置，字符串同理)`
        },
        {
          id: 22,
          title: "把集合的元素按照key归类，key由传入的参数返回。",
          answer: `groupBy()`,
          usage: `const arr = [
    {name: '小孙', age: 18, score: 60, weight: 60},
    {name: '小王', age: 19, score: 70, weight: 55},
    {name: '小李', age: 18, score: 60, weight: 70},
    {name: '小刘', age: 20, score: 70, weight: 65},
    {name: '小赵', age: 18, score: 60, weight: 60},
    {name: '小钱', age: 19, score: 70, weight: 55},
    {name: '小周', age: 20, score: 60, weight: 50},
];
const example = (data, key) => {
	return data.reduce(function(prev, cur) {
		(prev[cur[key]] = prev[cur[key]] || []).push(cur);
        	return prev;
        }, {});
};
console.log(example(arr, 'age'));
// object: {18: Array(3), 19: Array(2), 20: Array(2)}
18: Array(3)
0: {name: "小孙", age: 18, score: 60, weight: 60}
1: {name: "小李", age: 18, score: 60, weight: 70}
2: {name: "小赵", age: 18, score: 60, weight: 60}
19: Array(2)
0: {name: "小王", age: 19, score: 70, weight: 55}
1: {name: "小钱", age: 19, score: 70, weight: 55}
20: Array(2)
0: {name: "小刘", age: 20, score: 70, weight: 65}
1: {name: "小周", age: 20, score: 60, weight: 50}`
        },
        {
          id: 23,
          title: "用洗牌算法随机打乱一个集合。",
          answer: `shuffle()`,
          usage: `const arr = [1,2,3,4,5,6,7,8,9,10];
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
console.log(shuffle(arr))
// [10, 9, 7, 5, 6, 4, 1, 2, 8, 3]`
        },
        {
          id: 24,
          title: "简写为flat（），接收一个数组，无论这个数组里嵌套了多少个数组，flatten最后都会把其变成一个一维数组(扁平化)。",
          answer: `flatten()`,
          usage: `const arr = [[1,2,3],[4,5,[6,7]]];
const a = arr.flatten(3);
console.log(a); // [1, 2, 3, 4, 5, 6, 7]`
        },
        {
          id: 25,
          title: "用来判断是不是数据是不是一个数组，返回值为true或false。",
          answer: `Array.isArray()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
console.log(Array.isArray(arr)) // true`
        },
        {
          id: 26,
          title: "从数组的指定位置拷贝元素到数组的另一个指定位置中。",
          answer: `copyWithin()`,
          usage: `格式：array.copyWithin(target, start, end)
const arr = [3,4,4,5,4,6,5,7];
console.log(arr.copyWithin(4,2)) // [3, 4, 4, 5, 4, 5, 4, 6]`
        },
        {
          id: 27,
          title: "返回符合传入测试（函数）条件的数组元素。",
          answer: `find()`,
          usage: `const arr = [3,4,4,5,4,6,5,7];
const a = test.find(item => item > 3);
console.log(a); //4(find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。)
const b = test.find(item => item == 0);
console.log(b); //undefined(如果没有符合条件的元素返回 undefined)`
        },


      ],
      strList: [
        {
          id: 1,
          title: "用于返回指定位置的字符。",
          answer: `charAt()`,
          usage: `const str = 'hello guys';
console.log(str.charAt(3))  // l`
        },
        {
          id: 2,
          title: "用于返回指定位置的字符的Unicode编码。",
          answer: `charCodeAt()`,
          usage: `const str = 'hello guys';
console.log(str.charCodeAt(3))  // 111`
        },
        {
          id: 3,
          title: "用于在字符串内检索指定的值或找到一个或多个正则表达式的匹配，返回的是值而不是值的位置。",
          answer: `match()`,
          usage: `const str = 'hello guys';
console.log(str.match('guys'))  // ["guys"]
// 使用正则匹配字符串
const strs = '1.hello guys, 2.are you ok?';
console.log(strs.match(/\d+/g)) // ["1", "2"]`
        },
        {
          id: 4,
          title: "替换匹配的字符串。",
          answer: `replace()`,
          usage: `const str = 'hello guys';
console.log(str.replace('guys', 'man'))  // hello man`
        },
        {
          id: 5,
          title: "用于检索与字符串匹配的子串，返回的是地址,与 indexOf() 的区别是 search 是强制正则的，而 indexOf 只是按字符串匹配的。",
          answer: `search()`,
          usage: `const str = 'hello guys';
console.log(str.search('guys'))  // 6
console.log(str.indexOf('guys'))  // 6
// 区别
conststring = 'abcdefg.1234';
console.log(string.search(/\./)) // 7（转译之后可以匹配到 . 的位置）
console.log(string.indexOf(/\./)) // -1 （相当于匹配/\./，找不到则返回-1,只能匹配字符串）`
        },
        {
          id: 6,
          title: "将字符串切割成数组。",
          answer: `split()`,
          usage: `const str = 'hello guys';
console.log(str.split('')) // ["h", "e", "l", "l", "o", " ", "g", "u", "y", "s"]
console.log(str.split('', 3)) //  ["h", "e", "l"]`
        },
        {
          id: 7,
          title: "将字符串转换成小写。",
          answer: `toLocaleLowerCase() & toLowerCase()`,
          usage: `const str = 'hello guys';
console.log(str.toLocaleLowerCase())  // hello guys
console.log(str.toLowerCase())  //  hello guys`
        },
        {
          id: 8,
          title: "将字符串转换成大写。",
          answer: `toLocaleUpperCase() & toUpperCase()`,
          usage: `const str = 'hello guys';
console.log(str.toLocaleUpperCase())  // HELLO GUYS
console.log(str.toUpperCase())  // HELLO GUYS`
        },
        {
          id: 9,
          title: "用于从起始索引号提取字符串中指定数目的字符。",
          answer: `substr()`,
          usage: `const str = 'hello guys';
console.log(str.substr(2))  // llo guys
console.log(str.substr(2, 7))  // llo guy`
        },
        {
          id: 10,
          title: "用于提取字符串中两个指定索引号之间的字符。",
          answer: `substring()`,
          usage: `(与 slice() 和 substr() 方法不同的是， substring() 不接受负的参数。)
const str = 'hello guys';
console.log(str.substring(2))   // llo guys
console.log(str.substring(2, 7))  //  llo g`
        },
        {
          id: 11,
          title: "去掉字符串两端的空格。",
          answer: `trim()`,
          usage: `const str = '    hello guys    ';
console.log(str.trim()) // hello guys(不会改变原数组)`
        },
      ],
      jsonList: [
        {
          id: 1,
          title: "用于把字符串转化为对象。",
          answer: `JSON.parse()`,
          usage: `const str = '{"name": "phoebe", "age": 20}';
const obj = JSON.parse(str)  // {name: "phoebe", age: 20}（object类型）`
        },
        {
          id: 2,
          title: "用于把对象转化为字符串。",
          answer: `JSON.stringify()`,
          usage: `const obj = {"name": "Tins", "age": 22};
const str = JSON.stringify(obj)  // {"name":"Tins","age":22}(string类型)`
        },
      ],
      objectList: [
        {
          id: 1,
          title: "返回当前对象对应的值",
          answer: `Object.Prototype.valueOf()`,
          usage: `返回当前对象对应的值。（ Object.valueOf（） 相当于 Object.Prototype.ValueOf()
我们创建一个取代 valueOf() 方法的函数，但是需要注意的是方法必须不能传入参数 。假设我们有个对象叫 ObjectrType 而我想为它创建一个 valueOf() 方法。下面的代码为 valueOf() 方法赋予了一个自定义函数

ObjectrType.prototype.valueOf = function() { return customValue; };
复制代码
有了这样的一个方法，下一次每当 ObjectrType 要被转换为原始类型值时， JavaScript 在此之前会自动调用自定义的 valueOf() 方法。valueOf() 方法一般都会被 JavaScript 自动调用，但我们也可以像下面代码那样自己调用：

ObjectrType.valueOf()
复制代码
valueOf 同样适用于 string ， number ， symbol ， boolean ， date 。`
        },
        {
          id: 2,
          title: "返回当前对象对应的字符串形式。",
          answer: `Object.Prototype.toString()`,
          usage: `functionDog(name) {
    this.name = name;
}
const dog1 = new Dog('Gabby');
Dog.prototype.toString = functiondogToString() {
    return'' + this.name;
}
console.log(dog1.toString());  // Gabby`
        },
        {
          id: 3,
          title: "返回当前对象对应的模块字符串。",
          answer: `Object.Prototype.toLocaleString()`,
          usage: `语法：obj.toLocaleString();

let foo = {};
foo.toLocaleString(); // "[object Object]"`
        },
        {
          id: 4,
          title: "判断当前对象是否为另一个对象的原型",
          answer: `Object.Prototype.isPrototypeOf()`,
          usage: `Object.prototype.isPrototypeOf(targetObj)const arr = [];
Array.prototype.isPrototypeOf(arr); // true
// 修改obj的原型
Object.setPrototypeOf(arr, String.prototype);
Array.prototype.isPrototypeOf(arr); // false
String.prototype.isPrototypeOf(arr); // true`
        },
        {
          id: 5,
          title: "判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性,并返回一个布尔值。",
          answer: `Object.Prototype.hasOwnProperty()`,
          usage: `let obj = {};// 定义一个object实例
obj.prop1 = 'value1'; // prop1是一个自有属性
obj.constructor.prototype.prop2 = 'value2'; // prop2是一个原型链属性
// 无论自有属性还是原型链属性，我们都可以访问到
console.info(obj.prop1); // value1
console.info(obj.prop2); // value2
// 使用'hasOwnProperty()'方法判断属性是否为自有属性
obj.hasOwnProperty('prop1'); // true
obj.hasOwnProperty('prop2'); // false`
        },
        {
          id: 6,
          title: "判断某个属性是否可枚举。",
          answer: `Object.Prototype.PropertyIsEnumerable()`,
          usage: `const obj = { name: 'ecmaer'};
Object.getOwnPropertyDescriptor(obj, 'name').enumerable; // true
obj.propertyIsEnumerable('name'); // true
// 将属性name设置成不可枚举
Object.defineProperty(obj, 'name', {enumerable: false});
obj.propertyIsEnumerable('name'); // false
for(let i in obj){
    console.info(obj[i]); // 没有遍历出'ecmaer'
}`
        },
      ],
      mathList: [
        {
          id: 1,
          title: "对数进行上舍入（天花板函数） 大于等于 x，并且与它最接近的整数。",
          answer: `Math.ceil()`,
        },
        {
          id: 2,
          title: "对数进行下舍入（地板函数）。",
          answer: `Math.floor()`,
        },
        {
          id: 3,
          title: "返回x,y中的最大值。",
          answer: `Math.max(x,y)`,
        },
        {
          id: 4,
          title: "返回x,y中的最小值。",
          answer: `Math.min(x,y)`,
        },
        {
          id: 5,
          title: "返回0-1之间的随机数。",
          answer: `Math.random()`,
        },
        {
          id: 6,
          title: "四舍五入。",
          answer: `Math.round(x)`,
        },
        {
          id: 7,
          title: "返回数的绝对值。",
          answer: `Math.abs(x)`,
        },
      ]
    };
  },
}

</script>
<style lang='scss' scoped>
.jsfun {
  
  h1 {
    margin: 40px 0;
    font-size: 40px;
    text-align: center;
  }
}
</style>