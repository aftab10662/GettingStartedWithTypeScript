var configOptions = {

    baseUrl: 'src/app/'

};

require.config(configOptions);

require(["app"], function(app){


    new app.App().sayHello();
})