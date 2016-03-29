var GameLayer = cc.LayerColor.extend({
  init: function() {
    this._super( new cc.Color( 127, 127, 127, 255 ) );
    this.setPosition( new cc.Point( 0, 0 ) );
    var char = new Character();
    char.setPosition(new cc.Point(200,200));
    this.addChild(char);
    var enemy = new Enemy();
    enemy.setPosition(new cc.Point(400,200));
    this.addChild(enemy);
    var object = new Objects();
    object.setPosition(new cc.Point(300,300));
    this.addChild(object);

    return true;
  }
});

var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild( layer );
  }
});
