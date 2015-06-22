﻿({
    //  source directory which contains all the modules, services and library
    appDir: '../src/scripts',

    //  defines all the shim configuration
    mainConfigFile: '../src/scripts/release/js/common.js',


    //  the release output directory
    dir: '../scripts/build/release',

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