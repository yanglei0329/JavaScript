# 前端基础 - HTML简介及开发环境

## HTML简介及开发环境

### HTML简介：

- 英文：Hyper Text Markup Language(超级文本标记语言)

- 超级文本：普通文本只能显示文字，超级文本，除了显示几本文字之外

- 显示图片，视频，音频，文件特殊效果等

- 标记：是HTML的组成元素

- 语言：一门编程语言

  

### HTML特点：

- 不需要编译
- 后缀名*.html或*htm

#### 标签特点：

- 标签是预定好的，我们只要了解其功能，直接拿过来使用即可
- 标签的名字是不区分大小写的
- 通常情况下标签由开始标签和结束标签组成，如果没有内容，那么可以写成自闭和标签

### 开发环境

---

​      在过去的几年时间里，出现了许多全新的网页应用程序，不过，由于应用程序的功能越来越丰富，也导致了前端开发的复杂度大幅增加。

​      现在也有不少前端开发工具，比如Backbone和EmberJS框架都能提供稳定的APP开发解决方案。同事，javascript的应用也越来越常广泛，而且它还能和Node.JS在后端协同工作，快速搭建易于扩展的网络应用。实际上，为了应对前端开发复杂度所带来的挑战，开发人员创建了许多工具来简化开发流程。从测试框架，到分析工具，前端开发工具已经非常成熟了，正是得益于这些有用的工具才让用户体验到最佳的互联网服务。

  #### chrome浏览器

​       这是目前最好的前端开发工具。自从其诞生以来，Chrome在其开发者工具中投入了大量精力，而且直到现在，谷歌仍在不断优化这些工具。一般而言，谷歌会在每六周发布对Chrome开发者工具的优化，并推出一些全新功能。

### 前端开发环境安装与配置

---

​     前端开发，我们主要使用Angular JS框架来开发JavaScript代码，CSS样式表我们使用Less进行开发，而开发环境则使用Gulp进行包管理和批处理编译。

#### 软件安装

 Node.js

去官网下载并安装， https://nodejs.org/dist/v5.10.1/node-v5.10.1-x64.msi （若是Mac/[Linux](http://www.elecfans.com/tags/linux/)，选择对应版本下载）

安装在任意目录下，安装好之后运行Node.js command prompt，输入node -v 命令，显示node.js版本号即安装成功

Sublime [Te](http://www.elecfans.com/tags/te/)xt 3

去官网下载并安装，http://www.sublimetext.com/3 ，安装完成后自行搜索激活码激活即可

Sublime Text 插件

使用Package Control组件安装

1、按 Ctrl + ` 调出console（注：安装有QQ输入法的这个快捷键会有冲突的，输入法属性设置-输入法管理-取消热键切换至QQ拼音）

2、输入以下代码并回车

import urllib.request，os; pf = ‘Package Control.sublime-package’;

ipp = sublime.installed_packages_path（）;

urllib.request.install_opener（ urllib.request.build_opener（ urllib.request.ProxyHandler（）） ）;

open（os.path.join（ipp， pf）， ‘wb’）.write（urllib.request.urlopen（ ‘http://sublime.wbond.net/’ + pf.replace（‘ ’，‘%20’））.read（））

3、 重新启动Sublime Text 3

4、若在Pe[rf](http://www.hqchip.com/app/193)erences-》package set[ti](http://www.elecfans.com/tags/德州仪器/)ngs中看到package control这一项，则表示安装成功。

5、按下Ctrl + Sh[if](http://www.hqchip.com/app/844)t + P调出命令板

6、输入install调出Install Package选项并回车，然后在列表中选择需要的插件进行安装

 

![1](D:\大三上\typora文件\图片\1.png)

建议安装以下插件

Angula JS ： AngulaJS代码提示

Doc Blockr：注释生成器，当我们使用/**的时候会自动加入注释模板

Emmet：HTML快速开发插件

Side Bar：左侧栏

Convert To UTF-8：当我们打开非UTF-8的文档的时候，会自动转换成UTF-8

HTML/CSS/JS Prettify：代码格式化插件

 #### Git客户端

官网下载并安装，https://git-scm.com/download/win

#### iis WEB服务器

这是Windows系统自带的，安装与配置方法参考http://jingyan.b[ai](http://www.elecfans.com/tags/ai/)du.com/article/eb9f7b6d8410ab869364e835.html

#### 安装Gulp

安装Gulp之前，先把npm升级到最新版本（npm是Node.js的包管理工具，在Node.js安装的同时已经被安装了，可以直接使用npm命令）

打开Node.js command prompt，输入命令npm install npm -g

接着配置npm的全局路径

Windows下的Nodejs npm路径是appdata，可能不是我们想要的路径，可以改成我们指定的路径方便管理。

在cmd下执行以下命令

npm config set cache “X：\xxxxx\node_cache”

npm config set prefix “X：\xxxxx\node_global”

如果命令无效，可以去nodejs的安装目录中找到node_modules\npm\npmrc文件，这个文件存放npm的userconfig配置。

修改如下即可：

prefix = X：\xxxxx\node_global

cache = X：\xxxxx\ node_cache

建议配置在node.js的安装路径下，（我的node.js安装在E：\web-dev\node.js，后续内容都发生在此路径或者E：\web-dev下）

在E：\web-dev 下新建个文件夹，任意取名，这个文件夹即开发工程根目录（我取名为learning）

![2](D:\大三上\typora文件\图片\2.png)

1、全局安装

打开Node.js command prompt，进入learning路径，输入命令npm install -g gulp

安装完毕后输入gulp -v，如果提示不是内部或外部命令，说明没有配置系统变量path，手动去配置pasth，地址是prefix的地址。

2、本地安装

输入命令npm init，初始化Node环境，根据实际情况填写内容

输入命令npm install gulp -save-dev

3、安装gulp相关插件

首先安装 npm install –save-dev gulp-load-plugins

后面选择自己需要的安装，这里我安装了以下插件

npm install –save-dev gulp-rename 用来重命名文件流中的文件

npm install –save-dev gulp-uglify 用来压缩js文件，使用的是uglify引擎

npm install –save-dev gulp-[mi](http://www.hqpcb.com/zhuoluye11/?tid=26&plan=fashaoyou)nify-css 要压缩css文件时可以使用该插件

npm install –save-dev gulp-minify-html 用来压缩html文件

npm install –save-dev gulp-jshint 用来检查js代码

npm install –save-dev jshint 安装了gulp-jshint，一定要同时安装jshint

npm install –save-dev gulp-concat 用来把多个文件合并为一个文件，我们可以用它来合并js或css文件等，这样就能减少页面的http请求数了

npm install –save-dev gulp-less less使用gulp-less

npm install –save-dev gulp-sass sass使用gulp-sass

npm install –save-dev gulp-imagemin gulp-imagemin插件来压缩jpg、png、gif等图片

npm install –save-dev gulp-livereload 当代码变化时，它可以帮我们自动刷新页面

该插件最好配合谷歌浏览器来使用，且要安装livereload chrome extension扩展插件

npm install –save-dev gulp-htmlhint 校验HTML语法

npm install –save-dev gulp-sourcemaps CSS Source Map生成

npm install –save-dev gulp-notify 通知栏（出错后会在Windows右下方提示错误）

npm install –save-dev gulp-plumber 错误处理兼容

插件安装完毕后在工程根目录下的package.json文件里能看到，如图

![3](D:\大三上\typora文件\图片\3.png)

安装Bower

首先初始化Bower配置文件，进入learning路径（E：\web-dev\learning），输入命令bower init即可，和gulp的init类似，按实际情况填写，其中有4个问题提示，分别输入y、y、n、y。

输入命令安装Bower： npm install bower -g

注：Bower的作用主要是管理我们需要的开发包，例如Angula JS、jQuery等等。

配置开发依赖包路径

Bower的作用是来管理开发包，所以需要对开发包的路径做个配置

在根路径下建一个.bowerrc文件，并写入内容，如图所示

![4](D:\大三上\typora文件\图片\4.png)

配置批处理任务

此时需要把工程目录创建好，工程目录如图

![5](D:\大三上\typora文件\图片\5.png)

其中dist目录下存放的是最终编译生成的文件，src目录下存放的是开发编辑的文件

在根路径下（E：\web-dev\learning）新建个js文件，gulpfile.js，文件内容如图

![6](D:\大三上\typora文件\图片\6.png)

在命令行下执行命令 gulp，不输出错误信息以及一直处于等待状态即为配置成功

后续在src下的js、css里编写完代码后，在根路径命令行下执行gulp命令，在dist下的js、css里会生成对应的编译文件

#### 开发环境配置

在这里实际上就是使用Bower来安装开发包

打开Node.js command prompt，进入工程根路径（E：\web-dev\learning），安装所需要的开发包，我安装的开发包如下

bower install –save angularjs

bower install –save angular-animate

bower install –save echarts

bower install –save jquery

bower install –save sparkline

bower install –save ng-stomp

至此，前端环境已安装配置完毕，可根据自己需要修改工程的开发目录