#!/usr/bin/env node
'use strict';
const files = require('./lib/files');

if (!files.findOrCreate('.terragrunt')) {
    console.log(chalk.red('A Terragrunt file already exists!'));
    process.exit();
}

return console.log(chalk.green('Success! Terragrunt file created!'));