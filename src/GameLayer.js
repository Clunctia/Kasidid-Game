var GameLayer = cc.LayerColor.extend({
  init: function() {
    this._super( new cc.Color( 127, 127, 127, 255 ) );
    this.setPosition( new cc.Point( 0, 0 ) );
    this.timer = 0;
    this.magics = [];

    this.createBlocks();
    //this.createMagics();
    this.addEnemies();
    this.addObstacle();
    this.addGoalPoint();
    this.addCharacter();

    this.addKeyboardHandlers();

    this.scheduleUpdate();
    return true;
  },

  update: function(){
    this.increaseTime();
    if ( this.char.fallOutStage() ) {
      this.char.setPosition( 200, 160 );
      this.char.vx = 0;
      this.char.vy = 0;
    }
    this.char.wallCollision();
    this.isFinish();
  },

  increaseTime: function(){
    this.timer += 0.1;
  },

  createBlocks: function() {
    this.blocks = [];
    var block1 = new Block( 0, 0, 700, 160 );
    this.blocks.push( block1 );

    var block2 = new Block( 0, 200, 400, 250 );
    this.blocks.push( block2 );

    var block3 = new Block( 600, 400, 800, 450 );
    this.blocks.push( block3 );

    var block4 = new Block( 900, 500, 1000, 550 );
    this.blocks.push( block4 );

    var block5 = new Block( 1150, 300, 1500, 250 );
    this.blocks.push( block5 );

    var block6 = new Block( 1300, 0, 1700, 200 );
    this.blocks.push( block6 );

    var block7 = new Block( 1800, 300, 2100, 400 );
    this.blocks.push( block7 );

    var block8 = new Block( 1900, 550, 2100, 600 );
    this.blocks.push( block8 );

    var block9 = new Block( 2300, 650, 2500, 700 );
    this.blocks.push( block9 );

    var block10 = new Block( 2800, 700, 3100, 850 );
    this.blocks.push( block10 );

    var block11 = new Block( 2000, 900, 2600, 950 );
    this.blocks.push( block11 );

    var block12 = new Block( 1500, 1000, 2000, 1050 );
    this.blocks.push( block12 );

    var block13 = new Block( 1000, 980, 1200, 1000 );
    this.blocks.push( block13 );

    var block14 = new Block( 700, 800, 1000, 850 );
    this.blocks.push( block14 );

    var block15 = new Block( 400, 1000, 700, 1050 );
    this.blocks.push( block15 );

    var block16 = new Block( 200, 1100, 400, 1150);
    this.blocks.push( block16 );

    var block17 = new Block( 0, 1250, 450, 1300 );
    this.blocks.push( block17 );

    var block18 = new Block( 900, 1250, 1000, 1300 );
    this.blocks.push( block18 );

    var block19 = new Block( 1500, 1300, 1700, 1350 );
    this.blocks.push( block19 );

    var block20 = new Block( 2300, 1300, 3100, 1350 );
    this.blocks.push( block20 );
    //mid
    var block21 = new Block( 500, 1600, 1000, 1550 );
    this.blocks.push( block21 );
    //mid
    var block22 = new Block( 1200, 1800, 1600, 1850 );
    this.blocks.push( block22 );

    var block23 = new Block( 2300, 1800, 2600, 1850 );
    this.blocks.push( block23 );

    var block24 = new Block( 2900, 1800, 3200, 1850 );
    this.blocks.push( block24 );

    var block25 = new Block( 2400, 2100, 2700, 2150 );
    this.blocks.push( block25 );

    var block26 = new Block( 2800, 0, 3000, 160 );
    this.blocks.push( block26 );

    var block27 = new Block( 2400, 2800, 3000, 2850 );
    this.blocks.push( block27 );

    var block28 = new Block( 100, 2800, 450, 2850 );
    this.blocks.push( block28 );

    var block29 = new Block( 2200, 2800, 2250, 2850 );
    this.blocks.push( block29 );

    var block30 = new Block( 2850, 1500, 2900, 1550 );
    this.blocks.push( block30 );

    var block31 = new Block( 0, 3500, 200, 3550 );
    this.blocks.push( block31 );

    var block32 = new Block( 3000, 3500, 3500, 3550 );
    this.blocks.push( block32 );

    var block33 = new Block( 2700, 2600, 2900, 2650 );
    this.blocks.push( block33 );

    //temporary.
    var block34 = new Block( 1400, 1300, 1450, 1350 );
    this.blocks.push( block34 );

    //temporary.
    var block35 = new Block( 2000, 1300, 2150, 1350 );
    this.blocks.push( block35 );

    var block36 = new Block( 2500, 3200, 2600, 3250 );
    this.blocks.push( block36 );

    var block37 = new Block( 500, 3300, 800, 3350 );
    this.blocks.push( block37 );

    var block38 = new Block( 2700, 1700, 2750, 1750 );
    this.blocks.push( block38 );

    var block39 = new Block( 2500, 2000, 2600, 2050 );
    this.blocks.push( block39 );

    var block40 = new Block( 1900, 2900, 2000, 2950 );
    this.blocks.push( block40 );

    var block41 = new Block( 200, 2600, 800, 2650 );
    this.blocks.push( block41 );

    var block42 = new Block( 300, 2600, 700, 2650 );
    this.blocks.push( block42 );

    var block43 = new Block( 150, 2000, 450, 2050 );
    this.blocks.push( block43 );

    var block44 = new Block( 400, 2100, 800, 2150 );
    this.blocks.push( block44 );

    var block45 = new Block( 900, 2200, 1200, 2250 );
    this.blocks.push( block45 );

    var block46 = new Block( 1500, 1700, 1800, 1750 );
    this.blocks.push( block46 );

    var block47 = new Block( 2000, 1700, 2100, 1750 );
    this.blocks.push( block47 );

    var block48 = new Block( 500, 1800, 800, 1850 );
    this.blocks.push( block48 );

    var block49 = new Block( 800, 2500, 1050, 2550 );
    this.blocks.push( block49 );

    var block50 = new Block( 1400, 2500, 1600, 2550 );
    this.blocks.push( block50 );

    var block51 = new Block( 1700, 2550, 1800, 2600 );
    this.blocks.push( block51 );

    var block52 = new Block( 1500, 2200, 1700, 2250 );
    this.blocks.push( block52 );

    var block53 = new Block( 1900, 2200, 2100, 2250 );
    this.blocks.push( block53 );

    var block54 = new Block( 2000, 2400, 2100, 2450 );
    this.blocks.push( block54 );

    var block55 = new Block( 1950, 2600, 2050, 2650 );
    this.blocks.push( block55 );

    var block56 = new Block( 1000, 3000, 1100, 3050 );
    this.blocks.push( block56 );

    var block57 = new Block( 1200, 3000, 1250, 3050 );
    this.blocks.push( block57 );

    var block58 = new Block( 1600, 3100, 1250, 3150 );
    this.blocks.push( block58 );

    var block59 = new Block( 2300, 3200, 2400, 3250 );
    this.blocks.push( block59 );

    var block60 = new Block( 2700, 3350, 3000, 3400 );
    this.blocks.push( block60 );

    var block61 = new Block( 1800, 3100, 2200, 3150 );
    this.blocks.push( block61 );

    this.blocks.forEach( function( b ) {
      this.addChild( b );
    }, this );
  },

  addBackGround: function(){
    this.backGround = new BackGround();
    this.addChild( this.backGround );
  },

  addCharacter: function() {
    this.beginX = 200;
    this.beginY = 160;
    this.char = new Character( this.beginX, this.beginY );
    this.char.setBlocks( this.blocks );
    this.char.setObjs( this.objs );
    this.char.setEnemies( this.enemies );
    this.addChild( this.char );
    this.scheduleOnce( function() {
      this.char.scheduleUpdate();
    }, 1);
  },

  addEnemies: function() {
    this.enemies = [];

    var enemy1 = new Enemy( 400, 160, 1 );
    this.enemies.push( enemy1 );

    var enemy2 = new Enemy( 1400, 500, 2 );
    this.enemies.push( enemy2 );

    var enemy3 = new Enemy( 2000, 1000, 1 );
    this.enemies.push( enemy3 );

    var enemy4 = new Enemy( 2700, 1350, 2 );
    this.enemies.push( enemy4 );

    var enemy5 = new Enemy( 2200, 1850, 1 );
    this.enemies.push( enemy5 );

    var enemy6 = new Enemy( 2400, 2900, 1 );
    this.enemies.push( enemy6 );

    var enemy7 = new Enemy( 500, 900, 1 );
    this.enemies.push( enemy7 );

    var enemy8 = new Enemy( 2100, 2600, 2 );
    this.enemies.push( enemy8 );

    var enemy9 = new Enemy( 2800, 160, 1 );
    this.enemies.push( enemy9 );

    var enemy10 = new Enemy( 900, 1600, 2 );
    this.enemies.push( enemy10 );

    var enemy11 = new Enemy( 1600, 3200, 1 );
    this.enemies.push( enemy11 );

    var enemy12 = new Enemy( 2900, 3300, 2 );
    this.enemies.push( enemy12 );

    for(var i = 0; i < this.enemies.length ; i++ ){
      this.addChild( this.enemies[i] );
      this.enemies[i].scheduleUpdate();
    }
  },

  addObstacle: function() {
    this.objs = [];

    var obj_1 = new Objects( 300, 300 );
    this.objs.push( obj_1 );

    this.objs.forEach( function( b ) {
      this.addChild( b );
    }, this);
  },

  addGoalPoint: function(){
    this.goal = new Goal( 3300, 3550 );
    this.addChild( this.goal );
  },

  onKeyDown: function( keyCode, event ) {
    this.char.handleKeyDown( keyCode );
    if( keyCode == 67 ){
      this.castMagic();
    }
  },

  onKeyUp: function( keyCode, event ) {
    this.char.handleKeyUp( keyCode );
  },

  addKeyboardHandlers: function() {
    var self = this;
    cc.eventManager.addListener({
      event: cc.EventListener.KEYBOARD,

      onKeyPressed: function( keyCode, event ) {
        self.onKeyDown( keyCode, event );
      },

      onKeyReleased: function( keyCode, event ) {
        self.onKeyUp( keyCode, event );
      }
    }, this);
  },

  // createMagics: function(){
  //   for (var i = 0 ; i < GameLayer.maxMp * 2 ; i++){
  //       this.magics.push( new Magic ( i+1 ) );
  //       this.addChild( this.magics[i] , 1 );
  //       this.magics[i].scheduleUpdate();
  //   }
  // },
  //
  // castMagic: function() {
  //   if( this.canCastMagic() ){
  //     this.currentMP--;
  //     this.magics[ this.findAvMP() ].cast( this.char );
  //   }
  // },
  //
  // showMagicPoint: function(){
  //   for( var i = 0 ; i < GameLayer.maxMp ; i++ ){
  //     if( i < this.currentMP ){
  //       this.magics[i].showMagicPoint( i+1 );
  //       this.magics[i].casting = false;
  //     } else {
  //       this.magics[i].hide();
  //     }
  //   }
  // },
  //
  // canCastMagic: function() {
  //   if( this.currentMP > 0  && this.states == GameLayer.STATES.STARTED ){
  //     this.showMagicPoint();
  //     return true ;
  //   }
  //   return false ;
  // },
  //
  // findAvMP: function() {
  //   for( var i = GamLayer.maxMp ; i < this.magics.length ; i++ ){
  //     if( this.magics[i].casting = false )
  //       return i;
  //   }
  // },
  //
  // reCast: function(){
  //   if( this.timer > this.reCastTime && this.currentMP < this.maxMp ){
  //     this.currentMP ++;
  //   }
  // },
  //
  // freezeTime: function(){
  //
  // },

  isFinish: function(){
    if( this.goal.finish( this.char ) ){
      this.finish = cc.LabelTTF.create( 'Congratulations!!', 'Arial', 150 );
	    this.finish.setPosition( new cc.Point( 2500, 3000 ) );
	    this.addChild( this.finish );
    }
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

GameLayer.castTime = 5;
GameLayer.reCastTime = 5;
GameLayer.currentMP = 2;
GameLayer.freezeTime = 50;
GameLayer.maxMp = 2;
GameLayer.STATES = {
  FRONT: 1,
  STARTED: 2,
  DEAD: 3
};
