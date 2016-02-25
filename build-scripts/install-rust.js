var fs = require('fs');
var path = require('path');

var rustBuildDir = path.join('target','release');
var addonBuildDir = path.join('build','Release');
var copyLibs = function(src, dst) {
  var result = fs.readdirSync(src)
  .filter(function(filename){
    return fs.statSync(path.join(src,filename)).isFile()
  })
  .forEach(function(filename){
    fs.createReadStream(path.join(src,filename))
    .pipe(fs.createWriteStream(path.join(dst,filename)));
  });
};

copyLibs(rustBuildDir, addonBuildDir);
