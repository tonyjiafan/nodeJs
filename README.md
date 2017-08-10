# NodeJs



##### 主要的一些技术和工具

* nodemon

* sass

* seaJs

* gulp

* handlebars

* express-mysql

  ```
  数据库,控制层下的Dao中的database.js。操作数据库查询获取数据需要掌握一些基础的sql的查询语句
  ```

* 项目文件夹中yoho.sql的文件,需要导入到mysql中具体的配置请进入database.js中进行



##### gulp-livereload 实时刷新web页面，大大节省了开发时间，不用手动刷新你懂得

* 全局安装 gulp：

```
npm install --global gulp
```

* 作为项目的开发依赖（devDependencies）安装：

```
npm install gulp gulp-livereload --save-dev 
```

* 使用命令来查看你已经安装的npm包

```
 npm list -g -depth 0
```

* [google浏览器livereload的插件地址](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)


* 安装后会出现一个圆圈图标点击后可将圆心变为实心这个代表已经开始实时监听刷新

<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/4.png" />

* 具体配置进入gulpfile.js中查看 要注意引入gulp-webserver这个模块

    这个项目结构的搭建还有很多不足之处，还需要不断地改进！


##### 启动方式

* 安装依赖

  ```
  npm install    //  热启动需要全局安装nodemon 另外nodeJS最好安装稳定版本
  ```


* 启动sass监听

  ```
  gulp sass:watch  //  修改任意scss文件并保存，即可进行编译
  ```

* 启动项目

  ```
  npm run dev  //  mac上不能运行请加上sudo 
  ```

* 通过gulp来启动项目

  ```
  gulp start  //  gulp start 已经配置好监听所有文件，前提是需要开启webserver的服务

  gulp webserver  //  需要先执行这个命令启动 livereload
  ```

  ​

  ##### 项目截图


<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/1.png" />



<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/2.png" />



<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/3.png" />
