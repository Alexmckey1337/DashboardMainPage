module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'src/js/accordion.js',
                dest: 'dist/js/accordion.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dist/img/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/style.css': 'src/css/style.scss'
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify','imagemin','sass']);

};