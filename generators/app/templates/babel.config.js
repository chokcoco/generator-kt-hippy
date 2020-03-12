// babel.config.js
module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false, // 自动引入helpers
        regenerator: true, // 自动引入regenerator
      },
    ],
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
