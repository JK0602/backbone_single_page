require.config({
  baseUrl: 'js/',
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },  
      
  paths: {
    'jquery':        'lib/jquery.min',
    'underscore':    'lib/underscore-min',
    'backbone':      'lib/backbone-min',
    'app':      'app',
  },
  urlArgs: 'bust=' +  (new Date()).getTime()  //開発用（キャッシュさせないようにする）
});
        
require([
  'router',     
  'jquery',
], function (AppRouter) {
  new AppRouter();
  Backbone.history.start();
});