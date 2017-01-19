# nodeJs

nodeJs学习过程中自己练习的demo

# 主要的一些技术和工具：

​	1.nodemon

​	2.sass

​	3.seaJs

​	4.gulp

​	5.handlebars

​	6.mysql (数据库,控制层下的Dao中的database.js。操作数据库查询获取数据需要掌握一些基础的sql的查询语句)

​	7.项目文件夹中yoho.sql的文件,需要导入到mysql中具体的配置请进入database.js中进行。

# 新引入的 gulp-livereload 【实时刷新web页面，大大节省了开发时间，不用手动刷新你懂得】

a.全局安装 gulp：

　　npm install --global gulp

b.作为项目的开发依赖（devDependencies）安装：

　　npm install gulp gulp-livereload --save-dev 命令来安装livereload

c.使用命令来查看你已经安装的npm包

　　 npm list -g -depth 0

【具体配置进入gulpfile.js中查看 要注意引入gulp-webserver这个模块】

【google浏览器livereload的插件地址https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei ====安装后会出现一个圆圈图标点击后可将圆心变为实心这个代表已经开始实时监听刷新】

<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/4.png" />

    这个项目结构的搭建还有很多不足之处，还需要不断地改进！


# 启动方式

​ 1.进入项目文件夹-终端输入-npm install (安装项目所依赖的包)

​	[热启动需要全局安装nodemon 另外nodeJS最好安装稳定版本]


​	2.进入项目文件夹-终端 mac 下需输入 sudo npm run dev将权限提到最高   [在win下 -npm run dev  不能运行就以管理员身份运行]

​	3.可以单独开启监听sass的任务  终端输入： gulp sass:watch  即可（然后任意修改下scss文件并保存）

​	4.也可直接  终端输入：gulp start 已经配置好监听所有文件，有变化的时候会直接重新执行任务，浏览器页面也会自动实时刷新。

<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/1.png" />



<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/2.png" />



<img src="https://github.com/tonyjiafan/nodeJs/blob/master/introImg/3.png" />
