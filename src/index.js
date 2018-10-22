class AutoZipAfterBuild {
  constructor(options) {
    console.log(options)
  }

  apply(compiler) {
    compiler.plugin('done', (compilation, callback) => {

      console.log('处于编译完成的阶段')
      callback()
    })
  }
}

export default AutoZipAfterBuild