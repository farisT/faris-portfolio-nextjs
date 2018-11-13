const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const images = require('next-optimized-images')
 
module.exports = withPlugins([
  [sass, {
    cssModules: false,
    cssLoaderOptions: {
      localIdentName: '[path]___[local]___[hash:base64:5]',
    }
   } 
  ],
  [images]
]);