(function(){
  process.mixin(require('assert'));
  task('test', 'run each of the unit tests', function() {
    var _a, _b, _c, test;
    _a = []; _b = test_files;
    for (_c = 0; _c < _b.length; _c++) {
      test = _b[_c];
      _a.push(fs.readFile(test, function(err, code) {
        return eval(coffee.compile(code));
      }));
    }
    return _a;
  });
})();
