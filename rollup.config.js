import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";
import serve from "./serve";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: {
    file: 'public/build/bundle.js',
    sourcemap: true,
    format: 'iife',
    name: 'app',
  },
  plugins: [
    terser(),
    resolve(),
    commonjs(),
    typescript(),
    !production && serve(),
    !production && livereload('public'),
  ]
}