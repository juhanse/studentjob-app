const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer = {
	...defaultConfig.transformer,
	babelTransformerPath: require.resolve('react-native-svg-transformer'),
};
  
defaultConfig.resolver = {
	...defaultConfig.resolver,
	assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
	sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
};

defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;
