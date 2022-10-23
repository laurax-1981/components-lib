import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";

//import commonjs from "@rollup/plugin-commonjs";
//import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
    {
        input: "./src/index.js",
        output: [
            {
              file: 'dist/index.js',
              format: 'cjs',
            },
            {
              file: 'dist/index.es.js',
              format: 'es',
              exports: 'named',
            }
          ],
        plugins: [
            resolve(),
            external(),
            babel ({ exclude: "node_modules/**", presets: ["@babel/preset-react"]}),
        ]
    }
];