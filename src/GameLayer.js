var GameLayer = cc.LayerColor.extend({
  init: function() {
    this._super( new cc.Color( 127, 127, 127, 255 ) );
    this.setPosition( new cc.Point( 0, 0 ) );

    this.addCharacter();
    this.addEnemies();
    this.addObstracle();

    this.addKeyboardHandlers();

    return true;
  },
  addCharacter: function(){
    this.char = new Character();
    this.char.setPosition(new cc.Point(200,200));
    this.addChild(this.char);
  },
  addEnemies: function(){
    this.enemy = new Enemy();
    this.enemy.setPosition(new cc.Point(400,200));
    this.addChild(this.enemy);
  },
  addObstracle: function(){
    this.obstracle = new Objects();
    this.obstracle.setPosition(new cc.Point(300,300));
    this.addChild(this.obstracle);
  },
  onKeyDown: function(keyCode, event){
    console.log('Down: ' + keyCode.toString());
    if(keyCode == 39){
      this.char.moveRight();
    }
    else if (keyCode == 37) {
      this.char.moveLeft();
    }
    else if (keyCode == 38) {
      this.char.moveUp();
    }
    else if (keyCode == 40) {
      this.char.moveDown();
    }
  },
  onKeyUp: function(keyCode, event){
    console.log('Up: '+ keyCode.toString());

  },
  addKeyboardHandlers: function(){
    var self = this;
    cc.eventManager.addListener({
      event: cc.EventListener.KEYBOARD,
      onKeyPressed: function(keyCode, event){
        self.onKeyDown(keyCode, event);
      },
      onKeyReleased: function(keyCode, event){
        self.onKeyUp(keyCode, event);
      }
    }, this);
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
