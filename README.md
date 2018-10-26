# AutoZipAfterBuild


## desc
一款压缩输出文件的为 zip 压缩包的插件

## usage
#### npm
```bash
npm i -D autozipafterbuild
```


```
const autozipafterbuild = require('autozipafterbuild')

plugins: [
    new autozipafterbuild({
      dirName: __dirname + '/..', // 根目录路径
      buildName: '/build' , // build  文件路径
      name: '测试压缩名称',
      showTime: true // 是否在名称后显示时间
    })
]
```

#### output
build  文件下:
```
/static
/asset-manifest.json
/favicon.ico
/index.html
/manifest.json
/service-worker.js
/测试压缩名称10.26-16.49.zip
```