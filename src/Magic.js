var Magic = cc.Sprite.extend({
  ctor: function ( mp ){
    this._super();
    this.initWithFile( 'res/images/Magic.png' );
    this.setAnchorPoint( cc.p( 0, 0 ) );
    this.count = 0;
    this.distance = 0;
    this.mp = mp;
    this.maxDistance = 2000;
    this.vx = 25;
    this.casting = true;
  },

  update:function( dt ){
    if( this.casting ){
      var pos = this.getPosition();
      this.setPosition( pos.x + this.vx , pos.y );
      this.isMoveToLimit();
    }
    this.distance += this.vx;
  },

  isMoveToLimit: function() {
    if( this.distance > this.maxDistance ) {
      this.hide();
    }
  },

  showMP: function(){
    if( this.mp == 1 )
      this.setPosition( new cc.Point( 3200 , 35 ));
    else if ( this.mp == 2 )
      this.setPosition( new cc.Point( 3300 , 35 ));
    else
      this.hide();
  },

  hide: function() {
    this.setPosition( -20, -20 );
    this.distance = 0;
    this.casting = false;
  },

  cast: function( char ) {
    this.casting = true;
    var posChar = char.getPosition();
    this.setPosition( posChar.x, posChar.y );
  },

  magicDirection: function( char ){

  }

});
