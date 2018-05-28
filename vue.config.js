/* eslint-disable strict */
// https://github.com/vuejs/vue-cli/blob/dev/docs/config.md
// https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    // Config resolve alias
    config.resolve.alias
      .set('assets', path.resolve(__dirname, 'src/assets'))
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('views', path.resolve(__dirname, 'src/views'));
  },
};
