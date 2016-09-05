# nodeJs

这是自己搭建的一个项目的结构。

# 主要的一些技术：

​	1.nodemon 热启动（不必反复的重新手动启用服务）

​	2.sass（模块化css）

​	3.seaJs（按需加载模块）

​	4.gulp（自动化构建工具）

​	5.handlebars（模板引擎，自由选择是从服务器渲染页面还是发送数据到前端进行dom操作或者html得形式）

​	6.mysql (数据库,控制层下的Dao中的database.js。操作数据库查询获取数据需要掌握一些基础的sql的查询语句)

​	7.项目文件夹中yoho.sql的文件,需要导入到mysql中具体的配置请进入database.js中进行。

    这个项目结构的搭建还有很多不足之处，还需要不断地改进！


# 启动方式

​        1.进入项目文件夹-终端输入-npm install (安装项目所依赖的包)

​	[热启动需要全局安装nodemon 另外nodeJS最好安装稳定版本]


​	2.进入项目文件夹-终端输入-nodemon（mac下需sudo nodemon将权限提到最高）

​	3.需要同时开启 -sass- 的监听   终端输入： gulp sass:watch  即可（然后任意修改下scss文件并保存）



<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/1.png" />



<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/2.png" />



<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/3.png" />