//カウントページ

define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  //Model
  var CounterModel = Backbone.Model.extend({
          defaults: {counter: 0}
  });

  var NextView = Backbone.View.extend({
    tagName: "div",
    id: "cnt-next",
    template: null,
    timer: {},

    //イベント登録
    events: {
      "click .change": "change"
    },

    //初期化
    initialize: function(){
console.log("NextView: initialize");
      this.template = _.template(_render("next"));
      this.model = new CounterModel();
      this.listenTo(this.model,"change",this.render);

      var self = this;
      this.timer = setInterval(function(){self.count_up(self)},1000);

      this.render();
    },

    //2回目以降のページ遷移時
    second_access: function(){
      //カウンター初期化
      this.model.set("counter",0);

      var self = this;
      this.timer = setInterval(function(){self.count_up(self)},1000);

      this.render();
    },

    //カウンター
    count_up: function(self){
      var counter = self.model.get("counter");
      if(counter>=10 || location.hash.match(/^#next/)==null){
        clearTimeout(self.timer);
      }else{
        var counter = self.model.get("counter") + 1;
        self.model.set("counter",counter);
console.log(counter);
      }
    },

    //描画
    render: function(){
console.log("NextView: render");
      $("#content").empty();

      this.$el.html(this.template(this.model.toJSON()));
      $("#content").html(this.el);

      //イベントの再登録
      this.delegateEvents(this.events);

      return this;
    },

    change: function(){
console.log("NextView: click");
      clearTimeout(this.timer);
      location.href = "index.html#";
    }
  });

  return NextView;
});