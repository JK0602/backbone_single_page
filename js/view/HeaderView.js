//ヘッダー

define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  var HeaderView = Backbone.View.extend({
    el: $("#header"),

    //イベント登録
    events: {
      "click .change": "change"
    },

    //初期化
    initialize: function(){
console.log("HeaderView: initialize");

      this.template = _.template(_render("header"));
      this.render();
    },

    //描画
    render: function(){
console.log("HeaderView: render");
      this.$el.html(this.template());
      return this;
    },
    change: function(){
console.log("HeaderView: click");
      location.href = "index.html#";
    }
  });

  return HeaderView;
});