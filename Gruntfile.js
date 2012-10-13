module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Compile jade templates to html
    jade: {
      // Use links to development assets
      html: {
        src: ['index.jade'],
        dest: '.',
        options: {
          client: false,
          pretty: true
        }
      }
    },

    // Watch all source files and compile when changed
    watch: {
      files: ['*.jade'],
      tasks: 'jade'
    }

  });

  // Load tasks from NPM packages
  grunt.loadNpmTasks('grunt-jade'); // https://github.com/phated/grunt-jade

  // Default task
  grunt.registerTask('default', 'jade');

};