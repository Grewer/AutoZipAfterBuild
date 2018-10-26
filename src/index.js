class AutoZipAfterBuild {
  constructor(options) {
    console.log('options', options)
  }

  apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.done.tap('AutoZipAfterBuild', () => {
        // 未测试
        console.log('Hello World!');
      });
    } else {
      compiler.plugin('done', (compilation) => {
        // webpack 3.8
        console.log(__dirname) // '/'
        console.log('处于编译完成的阶段')
        // 仍旧需要传入文件地址
        // Object.keys(compilation.compilation.assets) // 可获取 assets  列表  但是不完全  因为没有 public 中的复制的文件和插件生成的文件
        // 因为 done 所以不需要 callback
      })
    }
  }
}

export default AutoZipAfterBuild