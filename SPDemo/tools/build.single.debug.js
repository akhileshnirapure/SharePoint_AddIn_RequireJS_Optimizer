({
    //  baseUrl to consider while build, this overrides the baseUrl defined in config file
    baseUrl: '../js/vendors',

    //  defines all the shim configuration
    mainConfigFile: '../js/common.js',
    
    //  The boostraper module which loads up the SPA 
    name: 'app/pages/default',

    //  the release output directory
    out: '../Scripts/debug/app.js',

    //  no minification
	optimize: 'none'                     
})