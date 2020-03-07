export default {
	input: './test/index.js',
	output: {
		format: 'esm',
		name: 'app',
		dir: 'public/build'
	},
	plugins: [
		require('rollup-plugin-svelte')({
			dev: true,
			css: css => css.write('public/build/bundle.css', false)
		}),
		require('@rollup/plugin-node-resolve')({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
			customResolveOptions: {
				moduleDirectory: ['test', 'node_modules'],
				extensions: ['.svelte', '/index.svelte', '.mjs', '.js', '.json']
			}
		}),
		require('@rollup/plugin-commonjs')(),
		require('rollup-plugin-serve')('public'),
		require('rollup-plugin-livereload')('public'),
		require('rollup-plugin-terser').terser(),
		require('rollup-plugin-cleaner')({ targets: ['public/build'] })
	]
}
