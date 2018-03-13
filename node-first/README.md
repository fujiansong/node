# Node 学习

## 环境配置

1. 安装nvm

    前往<https://github.com/coreybutler/nvm-windows/releases>下载nvm安装包，点击安装

2.  安装完成后检查nvm是否安装成功并安装node.js(自动捆绑安装npm)

    命令

        nvm v                   //查看nvm版本
        nvm install 8.10.0      //安装 node8.10.0版本
        nvm list                //查看本地安装node列表
        nvm use 8.10.0          //使用node 8.10.0 版本
        node -v                 //检查node版本

3. 初始化项目

    命令

        npm init                //创建一个package.json配置文件 
        
    或者使用

        npm init -y             //创建默认的package.json,创建过程中不会提问。
