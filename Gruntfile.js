module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['scss/style.scss'],
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    'http-server': {
      'dev': {
        root: '.',
        port: 8000,
        host: "0.0.0.0",
        showDir: true,
        autoIndex: true,
        ext: "html",
        runInBackground: true
      }
    }
  });
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default', ['http-server', 'watch']);
};
