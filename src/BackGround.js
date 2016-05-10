var BackGround = cc.Sprite.extend({
  ctor: function( x1, y1 ){
    this._super();
    this.initWithFile( 'res/images/' );
    this.setAnchorPoint( cc.p( 0, 0 ) );
    this.setPosition( cc.p( x1, y1 ))
  },


});
