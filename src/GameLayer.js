var GameLayer = cc.LayerColor.extend({
  init: function() {
    this._super( new cc.Color( 127, 127, 127, 255 ) );
    this.setPosition( new cc.Point( 0, 0 ) );

    this.createBlocks();

    this.addCharacter();
    this.addEnemies();
    this.addObstracle();

    this.addKeyboardHandlers();

    return true;
  },

  createBlocks: function() {
    this.blocks = [];
    var groundBlock = new Block( 0, 0, 700, 160 );
    this.blocks.push( groundBlock );

    var middleBlock = new Block( 0, 200, 400, 250 );
    this.blocks.push( middleBlock );

    var topBlock = new Block( 600, 400, 800, 450 );
    this.blocks.push( topBlock );

    this.blocks.forEach( function( b ) {
      this.addChild( b );
    }, this );
  },

  addCharacter: function(){
    this.char = new Character(  );

    this.char.setPosition( new cc.Point( 200, 200 ) );
    this.addChild( this.char );
  },

  addEnemies: function(){
    this.enemy = new Enemy();
    this.enemy.setPosition( new cc.Point( 400, 200 ) );
    this.addChild( this.enemy );
    this.enemy.scheduleUpdate();
  },

  addObstracle: function(){
    this.obstracle = new Objects();
    this.obstracle.setPosition( new cc.Point( 300, 300 ) );
    this.addChild( this.obstracle );
  },

  onKeyDown: function( keyCode, event ){
    console.log('Down: ' + keyCode.toString());
    this.char.handleKeyDown( keyCode );
  },

  onKeyUp: function( keyCode, event ){
    this.char.handleKeyUp( keyCode );
  },

  addKeyboardHandlers: function(){
    var self = this;
    cc.eventManager.addListener({
      event: cc.EventListener.KEYBOARD,

      onKeyPressed: function( keyCode, event ){
        self.onKeyDown( keyCode, event );
      },

      onKeyReleased: function( keyCode, event ){
        self.onKeyUp( keyCode, event );
      }
    }, this);
  }

});

var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild(layer);
  }
});
