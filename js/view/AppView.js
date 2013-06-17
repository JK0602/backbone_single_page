//トップページ

define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  var AppView = Backbone.View.extend({
    tagName: "div",
    id: "cnt-index",
    template: null,

    //イベント登録
    events: {
      "click .change": "change"
    },

    //初期化
    initialize: function(){
console.log("AppView: initialize");

      this.template = _.template(_render("top"));
      this.render();
    },

    //描画
    render: function(){
console.log("AppView: render");

      //HTMLクリア
      $("#content").empty();

      this.$el.html(this.template());
      $("#content").html(this.el);

      //イベント再登録
      this.delegateEvents(this.events);

      return this;
    },
    change: function(){
console.log("AppView: click");
      location.href = "index.html#next";
    }
  });

  return AppView;
});