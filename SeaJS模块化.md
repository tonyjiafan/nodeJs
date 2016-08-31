##前言##
SeaJS是一个遵循CommonJS规范的JavaScript模块加载框架，可以实现JavaScript的模块化开发及加载机制。

SeaJS的主要目的是令JavaScript开发模块化并可以轻松愉悦进行加载，将前端工程师从繁重的JavaScript文件及对象依赖处理中解放出来，可以专注于代码本身的逻辑。

SeaJS的作者是淘宝前端工程师玉伯。

SeaJS本身遵循KISS（Keep It Simple, Stupid）理念进行开发，其本身仅有个位数的API，因此学习起来毫无压力。在学习SeaJS的过程中，处处能感受到KISS原则的精髓——仅做一件事，做好一件事。

##使用SeaJS##

SeaJS项目目前托管在GitHub上，主页为 https://github.com/seajs/seajs/ 。

下载完成后,通过```<script>```标签将其引入页面

```
<script src="../sea.js"></script>
```

使用SeaJS开发JavaScript的基本原则就是：一切皆为模块。引入SeaJS后，编写JavaScript代码就变成了编写一个又一个模块，SeaJS中模块的概念有点类似于面向对象中的类——模块可以拥有数据和方法，数据和方法可以定义为公共或私有，公共数据和方法可以供别的模块调用。

另外，每个模块应该都定义在一个单独js文件中，即一个对应一个模块。

**模块的定义**

**define**
SeaJS中使用"define"函数定义一个模块

```
define(function(require, exports, module) {
    require("./module1");
    exports.add = function(x, y) {
        return x + y;
    };
});
```
里面的这个函数是模块的主体和重点:
- require: 模块加载函数,用于加载依赖的模块
- exports: 接口对象,将变量或方法定义其上并暴露给外部调用
- module: 模块的元数据

**require**
require是SeaJS主要的模块加载方法, 当在一个模块中需要用到其他模块时一般用require加载:
```
var module1 = require("../module1");
```
加载流程:
SeaJS会首先下载入口模块,然后顺着入口模块使用正则表达式匹配代码中所有的require,在根据require中的文件路径标识下载相应的JS文件,对下载来的js文件进行类似操作.传给require的路径标识必须是字符串字面量,不能是表达式,如下面使用require的方法是错误的:

```
require("module" + 1);
require("MODULE".toLowerCase());
```

**seajs.config**
SeaJS提供了一个config方法可以设置全局配置,接收一个表示全局配置的配置对象:
```
seajs.config({
    base: 'path/to/jslib/',
    alias: {
        'app': 'path/to/app/'
    },
    charset: 'utf-8',
    timeout: 20000,
    debug: false
});
```

- base: 表示基址寻址时的基址路径
- alias: 常用路径设置缩写
- charset: 表示下载js时script标签的charset属性
- timeout: 表示下载文件的最大时长, 以毫秒为单位
- debug: 表示是否工作在调试模式下

**seajs.use**
该方法主要用于载入入口模块,入口模块表示是一个程序的入口

```
seajs.use("./main", function(main) {
	//some code here
})
```

第一个参数为需要载入的文件的路径,可以不加后缀,默认为.js文件.第二个参数为加载成功之后的回调函数.

**Seajs如何与现有JS库配合使用**

要将现有JS库如jQuery与SeaJS一起使用，只需根据SeaJS的的模块定义规则对现有库进行一个封装。例如，下面是对jQuery的封装方法：

```
define(function() {
	//jquery原有代码
	return $.noConflict();
});
```