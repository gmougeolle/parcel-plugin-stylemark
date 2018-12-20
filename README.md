# parcel-plugin-stylemark  [![npm version](https://badge.fury.io/js/parcel-plugin-stylemark.svg)](https://badge.fury.io/js/parcel-plugin-stylemark)

A (very) simple Parcel plugin to generate a Stylemark styleguide after each successful build.

---

[【What is Parcel】](https://parceljs.org/) [【What is Stylemark】](https://github.com/nextbigsoundinc/stylemark)

## Installation

Parcel will automatically start using the plugin once its added to your package.json file.

To add the plugin to your existing project, run the below command.
You also need to install Stylemark, check the doc on Github.

```
npm i parcel-plugin-stylemark -D
```
or
```
yarn add parcel-plugin-stylemark -D
```

## Usage

You just need to create a `.stylemark.yml` file in your project root.
After each build, a `stylemark` folder will be generated in your `dist/` folder.
There's no config file at the moment.

PR are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details