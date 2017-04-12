import legacy from 'rollup-plugin-legacy';

export default {
	entry: 'src/main.js',
	dest: 'bundle.js',
	format: 'iife',
	plugins: [
		legacy({
			'vendor/legacy.js': 'test'
		})
	]
};