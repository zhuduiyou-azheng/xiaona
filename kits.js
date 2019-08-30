/* 
  我们将来在开发的时候，肯定会有很多重复使用的代码
  这些代码我们应该封装起来，以提高工作效率

  怎么封装呢？
    通常我们喜欢把方法封装到对象身上
*/
var kits = {};

kits.dispatchZero = function (num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

// 把方法都放到对象的身上
kits.formatDate = function () {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

// 常见的给id的方式1
// 当前时间戳 + 大的随机数
kits.getId = function () {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime();// 得到的是从1970年1月1日到现在为止的毫秒总数
  // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000, 999999);
  // 把两个数字连起来
  let id = time + '' + r;
  return id;
}


//求n到m之间的所有整数
kits.integer = function (n, m) {
  for (var i = n; i <= m; i++) {

  }
}

//求n到m之间的随机整数

kits.randomInt = function random(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}





//获取一个随机的十六进制的颜色
kits.randomHexColor = function getColor() {
  var str = '#';
  //定义一个十六进制的数组
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  for (var i = 0; i < 6; i++) {
    //通过随机数shengch索引，根据索引找到数组中对应的值然后拼接到一起
    var num = parseInt(Math.random() * 16);
    str += arr[num];
  }
  return str;
}



获取一个随机的rgb格式的颜色
function randomRgbColor() { //随机生成RGB颜色
  var r = Math.floor(Math.random() * 256); //随机生成256以内r值
  var g = Math.floor(Math.random() * 256); //随机生成256以内g值
  var b = Math.floor(Math.random() * 256); //随机生成256以内b值
  return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
}


// 获取一个随机的rgb格式的颜色另一种方法

// function random(n, m) {
//   return Math.floor(Math.random() * (m - n + 1) + n);
// }

// function randomColor() {
//   var r = random(0, 255);
//   var g = random(0, 255);
//   var b = random(0, 255);
//   return 'rgb(' + r + ',' + g + ',' + b + ')';
// }




/**
 * 从localStorage里面根据指定的键(key)获取一个数组
 * key 为本地数据的键名
 */
kits.getLocalDataArray = function (key) {
  let str = localStorage.getItem(key);//获取本地数据中的字符串
  let arr = JSON.parse(str);// 把字符串转换成数组
  return arr || [];
}

/**
 * 存储一个数据在本地存储中
 */
kits.saveLocalDataArray = function (key, obj) {
  let arr = JSON.stringify(obj);
  localStorage.setItem(key, arr);
}

/**
 * 向localStorage里面指定键(key)的数组数据追加一个数据对象（data）参数
 */
kits.appendDataIntoArray = function (key, obj) {
  let oldArr = tool.getLocalDataArray(key);
  oldArr.push(obj);
  arr = JSON.stringify(oldArr);
  localStorage.setItem(key, arr);
}

/**
 * 根据对应的id从localStorage中指定键(key)的数组中删除一条数据参数
 */
kits.deleteLocalDataById = function (key, id) {
  let oldArr = kits.getLocalDataArray(key);
  oldArr.forEach((e, i) => {
    if (e.id === id) {
      oldArr.splice(i, 1);
      return;
    }
  })
  kits.saveLocalDataArray(key, oldArr);
}

/**
 * 根据id修改localStorage里面的指定键(key)的数组数据参数
 */
kits.modifyLocalDataById = function (key, id, data) {
  let oldArr = kits.getLocalDataArray(key);
  oldArr.forEach((e, i) => {
    if (e.id === id) {
      e.id = data;
      return;
    }
  })
  kits.saveLocalDataArray(key, oldArr);
}



