define([
  'jquery',
  'underscore',
  'backbone',
  'view/HeaderView',
  'view/AppView',
  'view/NextView'
], function ($, _, Backbone, HeaderView, AppView, NextView) {
  var AppRouter = Backbone.Router.extend({
    instanceHeader: null,
    instanceIndex: null,
    instanceNext: null,

    initialize: function(){
      this.header();
    },

    routes: {
      '':        'index',
      'next':    'next',  
    },

    index: function(){
      if(this.instanceIndex==null){
        this.instanceIndex = new AppView();
      }else{
        this.instanceIndex.render();
      }
    },

    next: function(){
      if(this.instanceNext==null){
        this.instanceNext = new NextView();
      }else{
        this.instanceNext.second_access();
      } 
    },

    header: function(){
      if(this.instanceHeader==null){
        this.instanceHeader = new HeaderView();
      }else{
        this.instanceHeader.render();
      } 
    }
  });

  return AppRouter;
});


//テンプレートファイルの読み込み関数
var tmpl_cache;
function _render(tmpl_name) {
    if ( !tmpl_cache ) { 
        tmpl_cache = {};
    }
    if ( ! tmpl_cache[tmpl_name] ) {
        var tmpl_url = 'views/' + tmpl_name + '.tpl';
        var tmpl_string;
        $.ajax({
            url: tmpl_url,
            method: 'GET',
            async: false,
            dataType: "text",
            success: function(data) {
                console.log("_render: success "+tmpl_name);
                tmpl_string = data;
            },
            error: function(){
                console.log("error");
            }
        });
        tmpl_cache[tmpl_name] = tmpl_string;
    }
    return tmpl_cache[tmpl_name];
}