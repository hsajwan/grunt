module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.initConfig({
    uglify: {
      build: {
        files: [
          {
            src: "./index.js",
            dest: "./dist/minified.js"
          }
        ]
      }
    }
  });
};
