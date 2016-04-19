var Enemy = cc.Sprite.extend({
  ctor:function( x, y){
    this._super();
    this.initWithFile( 'res/images/Enemy.png' );
    this.x = x;
    this.y = y;

    this.vx = 2.5;
    this.check = true;

  },

  update: function( dt ) {
    this.checkEnemyPosition();
    this.enemyMovingAfterCheckPosition();
  },

  checkEnemyPosition: function(){
    if( this.x <= 400 ){
      this.check = true;
    } else if ( this.x >= 600 ){
      this.check = false;
    }
  },

  enemyMovingAfterCheckPosition: function(){
    if( this.check ){
      this.setPosition( cc.p( this.x, this.y ) );
      this.x += this.vx;
    } else if( !this.check ){
      this.setPosition( cc.p( this.x, this.y ) );
      this.x -= this.vx;
    }
  }



});
