var Enemy = cc.Sprite.extend({
  ctor:function( x, y, z){
    this._super();
    this.initWithFile( 'res/images/Enemy.png' );
    this.setAnchorPoint( cc.p( 0, 0 ) );
    this.x = x;
    this.y = y;
    this.distance = 0;
    if( z == 1 ){ this.distance = 0 }
    else { this.distance = 400 }
    this.vx = 2.5;
    this.check = true;
    this.checkFreeze = false;
  },

  update: function( dt ) {
    this.checkEnemyPosition();
    this.enemyMovingAfterCheckPosition();
  },

  checkEnemyPosition: function(){
    if( this.distance == 0 ){
      this.check = true;
    } else if ( this.distance == 400 ){
      this.check = false;
    }
  },

  enemyMovingAfterCheckPosition: function(){
    if( this.check ){
      this.setPosition( cc.p( this.x, this.y ) );
      this.x += this.vx;
      this.distance += this.vx;
    } else if( !this.check ){
      this.setPosition( cc.p( this.x, this.y ) );
      this.x -= this.vx;
      this.distance -= this.vx;
    }
  },



  magicHit: function( magic ){
    var enemyPos = this.getPosition();
    var magicPos = magic.getPosition();

    return false;
  }



});
