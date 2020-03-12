// jest.config.js
module.exports = {
  // 是否在运行时显示每条测试的结果
  verbose: true,

  // 用 babel-jest 处理 js/jsx/ts
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },

  // 指定 Jest 初始化设置脚本
  setupFiles: ['./jest.setup.js'],

  // 指定 module 名转换规则
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },

  // 定义不需要被 Babel 转换的文件
  transformIgnorePatterns: [],

  // 测试覆盖率配置
  collectCoverage: true,
  // "collectCoverageFrom": ["**/*.{js,jsx,ts}", "!**/node_modules/**"]
  collectCoverageFrom: [
    './src/**/**/*.{js,jsx,ts}',
    '!**/node_modules/**',
  ],
};
