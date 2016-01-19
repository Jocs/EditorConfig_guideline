#### 一、第一步

将项目中的`.editorconfig`文件放到你的项目根目录下。

#### 二、第二步

编辑器插件安装，有些编辑器自带EditorConfig插件，有的编辑器需要另行安装，是否需要安装插件或者安装方法可以参考官网：http://editorconfig.org/

举个栗子：Sublime Text需要自行安装插件

1. 按组合键 `Command` + `Control` + `P`  ，在打开的输入框中输入`Package install`.稍等一会，等待Package Control启动。
2. 在Package 搜索框中输入`EditorConfig` ，点击安装该插件。
3. 在如下路径下检查是否安装成功：

​	Sublime Text =>Preference => Packages Setting => Package Control => User Setting

检查User Setting文件中是否有我们安装的EditorConfig插件。

#### 三、第三步

重启编辑器，打开自己项目文件，就能看到格式化的代码了。
