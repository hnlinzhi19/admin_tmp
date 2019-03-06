const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll,
  addDecoratorsLegacy,
  fixBabelImports,
  babelInclude,
  addWebpackAlias
} = require("customize-cra");
const path = require('path');

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    babelInclude([
      path.resolve("src"), 
    ]),
    addWebpackAlias({
      ["utils"]: path.resolve(__dirname, "src/utils"),
      ["pages"]: path.resolve(__dirname, "src/pages"),
      ["routes"]: path.resolve(__dirname, "src/routes"),
      ["components"]: path.resolve(__dirname, "src/components"),
    }),
    // usual webpack plugin
    disableEsLint(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};