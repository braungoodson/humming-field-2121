module.exports = {
    options: {
        sourcesContent: true,
        mangle: false
    },
    target: {
        files: {
            'dist/js/js-core.js': require('./jsSrcFiles')
        }
    }
};