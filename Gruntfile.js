module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Compile jade templates to html
    jade: {
      html: {
        options: {
          client: false,
          pretty: true
        },
        files: {
          'index.html': 'index.jade'
        }
      }
    },

    // Watch all source files and compile when changed
    watch: {
      html: {
        files: ['*.jade'],
        tasks: 'jade'
      }
    },

    // Run development web server
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 3000,
          base: '.'
        }
      }
    }

  });

  // Load tasks from NPM packages
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task
  grunt.registerTask('default', 'jade');

  // Alias connect task
  grunt.registerTask('server', 'connect');

};