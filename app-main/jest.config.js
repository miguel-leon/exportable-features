// taken from https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
	roots: [
		'<rootDir>', // this is the default value
		'..' // must be appended otherwise moduleNameMapper will be ignored. because it is outside a root? 😖 🤦 🤷
	],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};
