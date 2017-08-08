module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      folder : ['www/']
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'vendor/', src: 'angular/angular.min.js', dest: 'www/lanani/vendor/', filter: 'isFile'},
          {expand: true, cwd: 'vendor/', src: 'bootstrap/dist/css/bootstrap.min.css', dest: 'www/lanani/vendor/', filter: 'isFile'},
          {expand: true, cwd: 'src/', src: 'index_*', dest: 'www/lanani', filter: 'isFile'},
          {expand: true, cwd: 'src/', src: 'style.css', dest: 'www/lanani', filter: 'isFile'},
          {expand: true, cwd: 'src/components/', src: '**', dest: 'www/lanani'}
        ]
      }
    },
    /*uglify: {
      my_target: {
        files: {
          'www/lanani/js/angular.min.js': ['node_modules/angular/angular.min.js'],
          'www/lanani/css/bootstrap.min.css': ['node_modules/bootstrap/dist/css/bootstrap.min.css']
        }
      }//my_target
    },//uglify*/
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'www/lanani/index.html': 'src/index.html',
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['clean', 'copy', 'htmlmin']);
}
