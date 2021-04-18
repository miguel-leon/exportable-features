Run `npm install` at this level to have a single `node_modules` folder shared for both projects.

Scripts that make it possible are in this level's `package.json` file.


If used this way, adding new packages is cumbersome though. Run `npm install --dry-run <package>` to discover the version that would be installed and then include it in the corresponding project's `package.json` relevant dependency section, to run the unaccompanied `npm install` afterwards.


After having built the library projects, i.e. having a `dist/` subdirectory in the projects directories, link those libraries to the `node_modules` with the corresponding `npm run install:common` and `npm run install:feature`.
