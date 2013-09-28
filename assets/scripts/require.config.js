requirejs.config({
    baseUrl: '/',
    shim: {
        Handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        modules: 'assets/scripts/modules',
        templates: 'assets/templates',
        Handlebars: 'vendors/components/handlebars/handlebars',
        hbars: 'vendors/components/requirejs-handlebars/hbars',
        text: 'vendors/components/requirejs-text/text'
    }
});
