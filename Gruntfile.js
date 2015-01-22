module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          "css/wxitv.css": "less/main.less"
        }
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "css/wxitv.css": "less/main.less"
        }
      }
    },
    watch: {

      less: {
        files: ['less/**/*.less'],
        tasks: ['less:development']
      }
    }// #watch
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less:development']);

};