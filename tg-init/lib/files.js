'use strict';
const fs = require('fs');
const path = require('path');

module.exports = {
  findOrCreate(filePath) {
      return fs.stat(filePath, (err, stat) => {
          if (!err) {
              return false;
          } else if(err.code == 'ENOENT') {
              // file does not exist
              fs.readFile(path.join(__dirname, 'tg-init/templates/terragrunt-template'), (err, data) => {
                  if (err) throw err;

                  fs.writeFile('.terragrunt', data);
                  return true;
              });
          }
          return false;
      });
  }
};