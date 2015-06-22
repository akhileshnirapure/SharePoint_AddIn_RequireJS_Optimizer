require.config({

    // sharepoint scripts library deployment path to vendors 
    baseUrl: '../scripts/release/js/vendors', 

    paths: {
        'jquery': 'jquery-2.1.4.min', // relative to basepath
        'jquery-private': 'jquery-private',
        app: '../app',
        common:'../common'
    },

    map: {

        // any module ask for jquery give jquery-private
        "*": { 'jquery': 'jquery-private' },

        "jquery-private": { 'jquery': 'jquery' }
    }
});