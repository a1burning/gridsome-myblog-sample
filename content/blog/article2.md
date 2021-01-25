# Gridsome(二)
## 创建Gridsome项目

- https://gridsome.org/docs/#how-to-install

### 1. 安装Gridsome CLI工具

```bash
npm install --global @gridsome/cli
```

### 2. 查看是否安装成功

```bash
# 查看是否安装成功
gridsome --version

# @gridsome/cli v0.3.4
```

### 3. 创建项目
执行`gridsome create 3-4-my-gridsome`

> PS:  
> 直接这样创建很难成功，因为依赖了第三方模块 [sharp(压缩图片大小，转换图片格式) - github  ](https://github.com/lovell/sharp)
> 这个包很难安装成功：  
> - 一个是包含C++文件，需要进行编译才能正确安装。
> - 依赖了一个libvips，这个包很大，有几十兆，国内也很难下载。
> 
> 所以需要这么做：
>
> 1. 打开 [sharp官网](https://sharp.pixelplumbing.com/install#chinese-mirror) 这个时候要配置两个选项
>
> - npm config set sharp_binary_host "https://npm.taobao.org/mirrors/sharp"
> - npm config set sharp_libvips_binary_host "https://npm.taobao.org/mirrors/sharp-libvips"
> 
> 2. 安装 [node-gyp](https://github.com/nodejs/node-gyp)  编译node的c++扩展包 `npm i -g node-gyp`
> 3. 需要配置环境，现在演示windows系统上如何配置，首先要安装python：Microsoft Store > Python 3.9 > 安装
> ![image](68CA4CEC75604537BE129C90D808D934)
> 4. 以管理员身份运行命令窗口并执行`npm install --global windows-build-tools`
>
> 5. 运行`node-gyp list`看是否正常启动
>
> 6. 安装好之后记得修改hosts文件 
> 
> 7. 在运行的时候，安装依赖会很慢，也看不到进度。可以直接打断，进入目录之后把node_modules删除，然后`npm i`安装依赖，就可以看到安装进度了。
>
> 如果再出错就用`cnpm i`安装

#### 4. 执行`npm run develop`命令
在工程文件夹中，可以看到package.json里面有三个命令，执行`npm run develop`命令。

```bash
"scripts": {
    "build": "gridsome build",
    "develop": "gridsome develop",
    "explore": "gridsome explore"
},
```

#### 5. 运行正常

启动之后可以看到

![image](2A29B019C71048FA9E16025C708F3A54)

浏览器访问正常

![image](6841FEB009AC42F6B8F5261FF850E45D)