import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import html from '@rollup/plugin-html'
import inject from '@rollup/plugin-inject'
import multi from '@rollup/plugin-multi-entry'
import replace from '@rollup/plugin-replace'
import run from '@rollup/plugin-run'
import strip from '@rollup/plugin-strip'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import path from 'path'

export default {
  input: ['src/index.ts', 'src/index1.ts'],
  output: [{
    file: 'output/cjs/bundle.js',
    format: 'cjs'
  },
  {
    file: 'output/amd/bundle.js',
    format: 'amd',
    amd: {
      id: 'Test'
    }
  },
  {
    file: 'output/esm/bundle.js',
    format: 'esm'
  },
  {
    file: 'output/iife/bundle.js',
    format: 'iife',
    name: 'Test'
  },
  {
    file: 'output/umd/bundle.js',
    format: 'umd',
    name: 'Test',
    amd: {
      id: 'Test'
    }
  },
  {
    file: 'output/system/bundle.js',
    format: 'system'
  }],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
      ]
    }),
    nodeResolve(), // 好像不使用也没问题
    commonjs({
      extensions: ['.js', '.ts']
    }),
    url(),
    postcss({
      plugins: [
      ],
      extract: true,  
      use: ["sass"], 
      writeDefinitions: true
    }),
    typescript(),
    inject({
      constants: 'src/constants/index.ts'
    }),
    babel({
      presets: ['@babel/preset-env'],
      // extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts'],
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs']
    }),
    multi(),
    html({}),
    replace({
      __test_version__: '1.0.0'
    }),
    // run()
    strip({
      functions: ['console.*'],
      include: ['**/*.js', '**/*.ts']
    })
  ]
}