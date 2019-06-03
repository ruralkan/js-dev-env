// var chalk is ES5 standard, with babelrc we can convert to es6 import chalk...
import chalk from 'chalk';
//TODO: the above comment in the line allows use the console without warnings in lint
console.log(chalk.green('Starting app in dev mode...'));  //eslint-disable-line no-console
