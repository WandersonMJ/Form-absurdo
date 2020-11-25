// eslint-disable-next-line @typescript-eslint/no-var-requires
const { injectBabelPlugin } = require('react-app-rewired')

const rootImport = [
  'root-import',
  {
    rootPathPrefix: '@',
    rootPathSuffix: 'src'
  }
]

module.exports = (config) => injectBabelPlugin(rootImport, config)
