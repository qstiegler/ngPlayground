module.exports = function(grunt) {
    grunt.initConfig({
        nggettext_extract: {
            pot: {
                files: {
                    'po/template.pot': ['partials/*.html']
                }
            }
        },
        nggettext_compile: {
            all: {
                files: {
                    'js/translations.js': ['po/*.po']
                }
            }
        },
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                title: "NG Test",
                success: false,
                duration: 3
            }
        },
        notify: {
            extracted: {
                options: {
                    title: 'angular-gettext',
                    message: 'Successfull extracted'
                }
            },
            compiled: {
                options: {
                    title: 'angular-gettext',
                    message: 'Successfull compiled'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.registerTask('text-extract', ['nggettext_extract', 'notify:extracted']);
    grunt.registerTask('text-compile', ['nggettext_compile', 'notify:compiled']);

    grunt.task.run('notify_hooks');
};

