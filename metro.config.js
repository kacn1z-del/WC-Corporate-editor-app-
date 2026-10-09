const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Permitir que archivos .html se empaqueten como assets
config.resolver.assetExts.push('html');

module.exports = config;
