/** @format */

import * as esbuild from 'esbuild-wasm';

//this is a plugin for esbuild to
// give it access to a file sytem inside the browser env
export const unpkgPathPlugin = () => {
  return {
    //name is needed to identify the plugin
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      //eventlistner that handles root file of index
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { path: 'index.js', namespace: 'a' };
      });

      //eventlistner that handles relative paths in a module
      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        return {
          namespace: 'a',
          path: new URL(args.path, 'https://unpkg.com' + args.resolveDir + '/')
            .href,
        };
      });

      //eventlistner that handles main file of a module
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`,
        };
      });
    },
  };
};
