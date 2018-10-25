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
        console.log('处于编译完成的阶段', compilation.compilation)
        // 因为 done 所以不需要 callback
      })
    }
  }
}

export default AutoZipAfterBuild