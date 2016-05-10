var Menu = cc.LayerColor.extend({
  init: function(){

  },

  addKeyboardHandlers: function(){

  },

  onKeyDown: function( keyCode, event ){

  }

});


var MenuScene = cc.Scene.extend({
  onEnter: function(){
    this._super();
    var layer = new Menu();
    layer.init();
    this.addChild( layer );
  }
});
