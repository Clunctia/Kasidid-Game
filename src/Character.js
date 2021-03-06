var Character = cc.Sprite.extend({
  ctor: function( x, y ){
    this._super();
    this.initWithFile( 'res/images/Character.png' );
    this.setAnchorPoint( cc.p( 0, 0 ) );
    this.x = x;
    this.y = y;
    this.beginPointX = x;
    this.beginPointY = y;

    this.setCharacterVelocity();

    this.vx = 0;
    this.vy = 0;

    this.setCharacterMoveAble();

    this.ground = null;

    this.blocks = [];
    this.objs = [];
    this.enemies = [];

    this.scheduleUpdate();

    this.updateSpritePosition();
  },

  setCharacterVelocity: function(){
    this.maxVx = 10;
    this.accX = 0.25;
    this.backAccX = 0.7;
    this.jumpV = 20;
    this.g = -1;
  },

  setCharacterMoveAble: function(){
    this.moveLeft = false;
    this.moveRight = false;
    this.jump = false;
    this.shoot = false;
  },

  updateSpritePosition: function(){
    this.setPosition( cc.p( Math.round( this.x ),
    Math.round( this.y ) ) );
  },

  getPlayerRect: function() {
    var spriteRect = this.getBoundingBoxToWorld();
    var spritePos = this.getPosition();

    var dX = this.x - spritePos.x;
    var dY = this.y - spritePos.y;
    return cc.rect( spriteRect.x + dX,
      spriteRect.y + dY,
      spriteRect.width,
      spriteRect.height );
  },

  update: function() {
    var currentPositionRect = this.getPlayerRect();

    this.updateYMovement();
    this.updateXMovement();

    var newPositionRect = this.getPlayerRect();
    this.handleCollision( currentPositionRect, newPositionRect );
    for(var i = 0 ; i < this.enemies.length ; i++) {
        this.enemyCollision( this.enemies[i] );
    }
    this.updateSpritePosition();
  },

  updateXMovement: function() {
    if ( this.ground ) {
      if ( ( !this.moveLeft ) && ( !this.moveRight ) ) {
        this.autoDeaccelerateX();
      } else if ( this.moveRight ) {
        this.accelerateX( 1 );
      } else {
        this.accelerateX( -1 );
      }
    }
    this.x += this.vx;
  },

  updateYMovement: function() {
    if ( this.ground ) {
      this.vy = 0;
      if ( this.jump ) {
        this.vy = this.jumpV;
        this.y = this.ground.getTopY() + this.vy;
        this.ground = null;
      }
    } else {
      this.vy += this.g;
      this.y += this.vy;
    }
  },

  isSameDirection: function( dir ) {
    return ( ( ( this.vx >=0 ) && ( dir >= 0 ) ) ||  ( ( this.vx <= 0 ) && ( dir <= 0 ) ) );
  },

  accelerateX: function( dir ) {
    if ( this.isSameDirection( dir ) ) {
      this.vx += dir * this.accX;
      if ( Math.abs( this.vx ) > this.maxVx ) {
        this.vx = dir * this.maxVx;
      }
    } else {
      if ( Math.abs( this.vx ) >= this.backAccX ) {
        this.vx += dir * this.backAccX;
      } else {
        this.vx = 0;
      }
    }
  },

  autoDeaccelerateX: function() {
    if ( Math.abs( this.vx ) < this.accX ) {
      this.vx = 0;
    } else if ( this.vx > 0 ) {
      this.vx -= this.accX;
    } else {
      this.vx += this.accX;
    }
  },

  handleCollision: function( oldRect, newRect ) {
    if ( this.ground ) {
        if ( !this.ground.onTop( newRect ) ) {
        this.ground = null;
      }
    } else {
      if ( this.vy <= 0 ) {
        var topBlock = this.findTopBlock( this.blocks, oldRect, newRect );
        if ( topBlock ) {
          this.ground = topBlock;
          this.y = topBlock.getTopY();
          this.vy = 0;
        }
      }
    }
  },

  findTopBlock: function( blocks, oldRect, newRect ) {
    var topBlock = null;
    var topBlockY = -1;

    blocks.forEach( function( b ) {
      if ( b.hitTop( oldRect, newRect ) ) {
        if ( b.getTopY() > topBlockY ) {
          topBlockY = b.getTopY();
          topBlock = b;
        }
      }
    }, this );

    return topBlock;
  },

  onObstacle: function( obj ) {

  },

  handleKeyDown: function( keyCode ) {
    if ( Character.KEYMAP[ keyCode ] != undefined ) {
      this[ Character.KEYMAP[ keyCode ] ] = true;
    }
  },

  handleKeyUp: function( keyCode ) {
    if ( Character.KEYMAP[ keyCode ] != undefined ) {
      this[ Character.KEYMAP[ keyCode ] ] = false;
     }
  },

  setBlocks: function( blocks ) {
    this.blocks = blocks;
  },

  setObjs: function( objs ) {
    this.objs = objs;
  },

  setEnemies: function( enemies ){
    this.enemies = enemies;
  },

  switchDirection: function() {

  },

  fallOutStage: function(){
    var pos = this.getPosition();
    if( pos.y < -10 ){
      return true;
    }
    return false;
  },

  wallCollision: function() {
    var pos = this.getPosition();
    if( pos.x < 0 ){
      this.setPosition( pos.x + 1, pos.y );
      this.vx = 0 ;
    }
    else if( pos.x > 3500 ){
      this.setPosition( pos.x - 1, pos.y );
      this.vx = 0;
    }
  },

  enemyCollision: function( enemy ) {
    var enemyPos = enemy.getPosition();
    var charPos = this.getPosition();
    if( (( Math.abs( enemyPos.x - charPos.x ) <= 40 ) && ( Math.abs( enemyPos.y - charPos.y ) <= 40 ) ) ){
        this.backToStartPoint();
    }
  },

  backToStartPoint: function(){
    this.setPosition( this.beginPointX, this.beginPointY );
    this.vx = 0;
    this.vy = 0;
  }

});

this.beginPointX = 0;
this.beginPointY = 0;
Character.KEYMAP = {}
Character.KEYMAP[cc.KEY.left] = 'moveLeft';
Character.KEYMAP[cc.KEY.right] = 'moveRight';
Character.KEYMAP[cc.KEY.space] = 'jump';

Character.DIR = {
  RIGHT: 1,
  LEFT: 2
};
