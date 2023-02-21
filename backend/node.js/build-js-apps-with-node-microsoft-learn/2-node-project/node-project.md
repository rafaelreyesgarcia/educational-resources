# configure package.json

to initialize a package.json file
- `npm init`
- `npm init -y`

enter project information
- name
- version
- description
- entry point
- test command
- repository
- keywords
- author
- license

package properties belong to
- **meta information** (project name, description, author, keywords)
- **dependencies** `dependencies` and `devDependencies`
- **scripts** `start` `build` `test` `lint`

standard practices

`start` invokes `node` with entry file as argument

`build` describes how to build a project. where compilers produce html, css or js to ship to the browser for example

`test` runs tests and if third-party libraries are used, command should invoke library's executable

`lint` invokes a linter program to find (and correct) inconsistencies in code.

```json
"scripts" : {
  "<action>" : "<command>"
}

"scripts" : {
  "start" : "node ./dist/index.js",
  "test": "jest",
  "build": "tsc",
  "lint": "eslint"
}
```

`start` and `test` can ommit the `run` word in the commad.

- edit package.json properties (name, description, main, keywords, author)

- add a `start` script

- npm `start` the project

# add packages to a node.js project

a **dependency** is a third-party library, reusable and composable code that a project will depend and rely on.

> the library is represented as a package stored in a registry in npm

a **package** is a collection of files needed to run one or many modules

when to implement packages
- implementing features (security, authentication, etc)
- save time

how to choose good dependencies
- **size** - on limited bandwidth or hardware limitations, small size packages leave a small footprint.
- **licensing** - is it ok to use it in your project?
- **maintenance and development** - is the package being actively maintain and improved?

how to install a package

`npm install <name of package>`

where to get packages
- registries like npm
- repositories, github URLs
- files from a local folder or zipped files
- directly from a directory

by running `npm install <name of dependency>`, node goes to the npm global registry and downlaods it

command categories
- **manage dependencies** install, update, remove packages
- **run scripts** that manage flows in app development. running tests, building code, lint, etc
- **configuration**
- **publishing** the package

```
npm --help
```

## production vs development

production dependencies are needed when the application runs in a production environment.

development dependencies are only needed while developing the application, they don't need to be shipped when building the application to deploy

npm flags

`--prodcution` will install only production dependencies, used in continuous integration and continuous deployment pipelines

`--save-dev` flag will install a developer depencency

`-g` packages can be install globally installed in a computer-specific directory `npm install <dependency name> -g`

the npx tool was created to address the issue of the space needed to store global dependencies in a local computer.

npx tool allows to load a dependency into node.js process and run the command there, then the dependency is removed after used

packages listed in `dependencies` in the package.json file will be different from `node_modules` dependencies

`npm list` shows `node_modules` dependencies

`npm list --depth=<depth>` addresses the issue of long lists of dependencies.

at depth `0` the command lists the same content in the `dependencies` section

depth `1` goes one level down in the installation, listing the packages primary dependencies

depth can keep increasing

## cleaning packages

dependencies take up space.

space becomes more important when building an SPA

building react, angular or vue apps require bundling and minification where the bundle is a concatenation of all modules used and the source code compressed. the bundle is then served from a browser.

> the larger the bundle, the longer it takes to send over the network

`npm uninstall <name of dependency>`

`npm prune` removes all dependencies in `node_modules` that aren't listed in the manifest file

# install packages

the function in `address-parser` takes a string and parses out info about a customer order.

install the jest library

```
npm install jest --save-dev
```

add a test script to the package.json

```json
{"test": "jest"}
```

run a test

`npm run test`

# manage dependency updates

managing the type of update a dependency needs uses semantic versioning.

semantic version allows to express the type of change introduced to a library/package.

versions

**major** means that breaking changes are introduced

**minor** means the code should still work and generally safe to accept the update

**patch** a change fixes something small, safe to accept the update.

ways to update a package

- `npm update <name of package>@<optional argument with version number>`

- `npm install` works similar to update nowadays

- the entry in the manifest file will also enforce npm to respect the version stated in there.

to determine what gets updated or how dependencies get install there's prefixes to package entries

x.0.0 or * updates to the highest major version

1.x.1 or ^ only updates the minor version

1.1.x or ~ updates to the latest patch version

**package-lock-.json**

file is generated when something modifies the `node_modules` directory

this file is created when you install a package

package-lock guarantees exact installations.

if package and package-lock agree on a semantic level, there's no conflict.

if package-lock specifies a different version, that is installed.

if the version is higher in package, then package-lock is ignored

any high-level vulnerabilities detected after installing a package should be updated.

`npm audit` command lists each vulnerability.

`npm audit fix` tries to fix the problem by upgrading to a minor version.

`npm audit fix --force` involves a breaking change if normal fix isn't enough.

a vulnerability is a weakness in code that attackers can exploit.

# knowledge check

1. How would you install a test framework like Jest?

`npm install jest --save-dev`

2. What is the main reason to use npx?

The dependency is downloaded directly into the Node.js process and is removed after the command is run. This tool is great for when you want to run commands infrequently.

3. How do you configure a package.json file so that you get only patch (bug fix) updates?

Locate the entry in dependencies or devDependencies. Set the entry to look like this one: `"<library>": "1.0.x"`

4. What are some recommended scripts to set up in a package.json at the start of a project?

start, test, lint, build

