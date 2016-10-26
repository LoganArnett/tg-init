'use strict';
const fs = require('fs');
const path = require('path');
const template = require('./templates/terragrunt-template');

module.exports = {
  findOrCreate(filePath) {
      return fs.stat(filePath, (err, stat) => {
          if (!err) {
              return false;
          } else if(err.code == 'ENOENT') {
              // file does not exist
              fs.writeFile('.terragrunt', template);
              return true;
          }
          return false;
      });
  }
};