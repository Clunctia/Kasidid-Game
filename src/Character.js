var Character = cc.Sprite.extend({
   ctor: function(){
       this._super();
       this.initWithFile('res/images/Character.png');
   },
   update: function(){
     var pos = this.getPosition();
     this.setPosition(new cc.Point(pos.x, pos.y +5));

   },
   switchDirection: function(){

   },
   moveUp: function(){
     var pos = this.getPosition();
     this.setPosition(new cc.Point(pos.x, pos.y+3));
   },
   moveDown: function(){
     var pos = this.getPosition();
     this.setPosition(new cc.Point(pos.x, pos.y-3));
   },
   moveLeft: function(){
     var pos = this.getPosition();
     this.setPosition(new cc.Point(pos.x-3, pos.y));
   },
   moveRight: function(){
     var pos = this.getPosition();
     this.setPosition(new cc.Point(pos.x+3, pos.y));
   }

});
