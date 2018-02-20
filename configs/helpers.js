var path = require('path');

function absolutePath(dir){
  return path.join(__dirname,'..', dir)
}
exports.absolutePath = absolutePath;
