const sourceMaps = require('rollup-plugin-sourcemaps');
const packageJSON = require('./package.json');

export default {
    input: 'dist/index.js',
    output: 
    {
        file: packageJSON.main,
        format: 'umd',
        sourcemap: true,
        name: 'typeScriptProLibraryProject'
    },
    plugins: [
        sourceMaps()
    ],
}