var grunt = require('grunt');
var path = require('path');

exports.push_cordova_test = function(test) {
    test.equal(true, grunt.file.isDir(path.resolve('bower_components')));
    test.equal(true, grunt.file.isDir(path.resolve('node_modules')));
    test.equal(true, grunt.file.isDir(path.resolve('platforms')));
    test.equal(true, grunt.file.isDir(path.resolve('plugins')));
    test.equal(true, grunt.file.isDir(path.resolve('src')));
    test.equal(true, grunt.file.isDir(path.resolve('test')));
    test.equal(true, grunt.file.isDir(path.resolve('www')));

    test.done();
};
