var Goal = cc.Sprite.extend({
  ctor:function( x, y ){
    this._super();
    this.initWithFile( 'res/images/Goal.png' );
    this.setAnchorPoint( cc.p( 0, 0 ) );
    this.setPosition( cc.p( x, y ) );
    this.x = x;
    this.y = y;
  },

  finish: function( char ){
    var charPos = char.getPosition();
    return  (( Math.abs( this.x - charPos.x ) <= 25 ) && ( Math.abs( this.y - charPos.y ) <= 25 ) );
  }

});
