import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    browser: true,
    input: 'index.js',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [nodeResolve()]
};