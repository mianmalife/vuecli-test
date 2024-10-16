const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    test: {
      entry: 'src/testPage/main.js',
      template: 'public/test.html',
      filename: 'test.html'
    },
    inner: {
      entry: 'src/innerPage/main.js',
      template: 'src/innerPage/innerPage.html',
      filename: 'innerPage/index.html'
    }
  }
})
