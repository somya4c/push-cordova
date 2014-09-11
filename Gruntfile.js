

module.exports = function(grunt) {

    //Project configuration.
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['node_modules/bootstrap/dist/css/bootstrap-theme.min.css'], dest: 'www/css'},

                    {expand: true, flatten: true, src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'], dest: 'www/css'},

                    {expand: true, flatten: true, src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'www/js'},

                    {expand: true, flatten: true, src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'], dest: 'www/js'}
                ]
            }
        }
    } );

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};


