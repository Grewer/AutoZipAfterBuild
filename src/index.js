const path = require('path');
const fs = require('fs-extra');
const yazl = require('yazl');

class AutoZipAfterBuild {
  constructor(options) {
    if (!options.dirName) {
      return console.warn(new Error('请输入根目录,例如 __dirname + \'/..\''))
    }
    if (!options.buildName) {
      return console.warn(new Error('请输入build文件目录,例如 /build'))
    }
    this.options = options
  }

  getInfoByDir(dir, former = '') {
    const files = fs.readdirSync(dir)
    let pathArray = []
    files.forEach(filename => {
      const fileDirName = path.join(dir, filename);

      const stats = fs.statSync(fileDirName)
      const isFile = stats.isFile();//是文件
      const isDir = stats.isDirectory();//是文件夹
      if (isFile) {
        if (filename.charAt(0) !== '.') {
          pathArray.push({fileDirName, filename: former + filename})
        }
      }
      if (isDir) {
        const res = this.getInfoByDir(fileDirName, former + filename + '/');//递归，如果是文件夹，就继续遍历该文件夹下面的文件
        pathArray.push(...res)
      }

    })
    return pathArray
  }


  zip() {
    const buildPath = this.options.dirName + this.options.buildName
    let files
    try {
      files = this.getInfoByDir(buildPath)
    } catch (e) {
      return console.warn('获取目录失败,打包失败!')
    }
    try {

      const zipfile = new yazl.ZipFile();

      files.forEach(value => {
        zipfile.addFile(value.fileDirName, value.filename);
      })

      let name = this.options.name || '压缩文件'

      if (this.options.showTime) {
        const date = new Date();
        name += `${date.getMonth() + 1}.${date.getDate()}-${date.getHours()}.${date.getMinutes()}`
      }

      zipfile.outputStream.pipe(fs.createWriteStream(buildPath + '/' + name + ".zip")).on("close", function () {
        console.log("压缩完成");
      });
      zipfile.end();
    } catch (e) {
      console.warn('压缩失败!')
    }
  }

  apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.done.tap('AutoZipAfterBuild', () => {
        // webpack 4+
        this.zip()
      });
    } else {
      compiler.plugin('done', (compilation) => {
        // webpack 3.8
        this.zip()
        // Object.keys(compilation.compilation.assets) // 可获取 assets  列表  但是不完全  因为没有 public 中的复制的文件和插件生成的文件
        // 因为 done 所以不需要 callback
      })
    }
  }
}

export default AutoZipAfterBuild