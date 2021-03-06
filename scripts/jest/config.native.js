const transformPackages = [
  'react-native',
  'react-native-camera-roll-picker',
];

module.exports = {
  preset: 'react-native',
  rootDir: process.cwd(),
  transform: {
    '^.+\\.jsx?$': require.resolve('./preprocessor.native'),
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: [
    require.resolve('./setup.js'),
  ],
  testRegex: '/__tests__/.*(\\.native\\.test\\.jsx|[^d]\\.ts)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!(${transformPackages.join('|')})/)`,
    // '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
  ],
};
