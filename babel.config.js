module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['.'],
          alias: {
            '@src': './',
            '@app': './app',
            '@api': './app/api',
            '@components': './app/components',
            '@hooks': './app/hooks',
          },
        },
      ],
    ],
  };
};
