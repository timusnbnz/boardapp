const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

/**
 * Webpack-Konfiguration für das Backend
 * Erstellt optimierte Node.js-Bundles ohne Hashing für Entwicklungsumgebung
 */
module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/backend'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,      // Optimierung deaktiviert für schnellere Builds
      outputHashing: 'none',
      generatePackageJson: true,
    }),
  ],
};
