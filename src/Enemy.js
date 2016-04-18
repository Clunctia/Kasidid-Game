var Enemy = cc.Sprite.extend({
  ctor:function(){
      this._super();
      this.initWithFile( 'res/images/Enemy.png' );
      this.vx = Enemy.VELOCITY;
      
  },

  update: function( dt ) {

  },

  checkEnemyPosition: function() {

  }

});

Enemy.VELOCITY = 15;
