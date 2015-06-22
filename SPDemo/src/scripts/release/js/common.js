require.config({

    // relative to pages
    baseUrl: '../scripts/release/js/vendors', 

    //  explicit configuration to let builder know the path 
    paths: {
        'jquery': 'jquery-2.1.4.min', // relative to basepath
        'jquery-private': 'jquery-private',
        app: '../app',
        common:'../common'
    },

    shim: {

        // any module ask for jquery give jquery-private
        "*": { 'jquery': 'jquery-private' },

        "jquery-private": { 'jquery': 'jquery' }
    }
});