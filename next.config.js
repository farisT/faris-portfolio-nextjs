const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const images = require('next-optimized-images')
 
module.exports = withPlugins([
  [sass],
  [images]
]);