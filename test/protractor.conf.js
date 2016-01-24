exports.config = {
    // Which WebDrivers to use
    multiCapabilities:[ // its single browser counterpart is 'capabilities'.
      
        {
            'browserName' : 'chrome'
        }
    ],

    specs: [ // Where to look for specs
        './**/*.spec.js'
    ],

    baseUrl: 'http://localhost:9000/' // Where your app is being served from
};

