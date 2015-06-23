({
    //  source directory which contains all the modules, services and library
    appDir: '../js',

    //  baseUrl to consider while build, this overrides the baseUrl defined in config file
    baseUrl: '../js/vendors',

    //  defines all the shim configuration
    mainConfigFile: '../js/common.js',


    //  the release output directory
    dir: '../Scripts/release',

    //  define the modules and related dependencies
    modules: [
        {
            //  building common js which encompases all the required library and modules
            name: 'common',
            include: ['jquery-private', 'jquery','app/services/logger']
        },
		{
            //  Defines page specific modules which excludes the common dependencies 
		    name: 'app/pages/default',
		    exclude: ['common']
        }

    ],

    //  we want to generate sourcemaps hence we need version2
    generateSourceMaps: true,
    preserveLicenseComments: false,
	optimize: 'uglify2'                     
})