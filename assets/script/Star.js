
cc.Class({
    extends: cc.Component,

    properties: {
       pickRadius: 0,
    },
    onLoad () {
        console.log(this.game)
    },
    start () {

    },
    update: function(dt) {
        if(this.getPlayerDistance() < this.pickRadius){
            this.onPicked();
            return;
        }
        var opacityRatio = 1 - this.game.timer / this.game.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    },
    getPlayerDistance: function(){
        
        var playerPos = this.game.player.getPosition();
        //计算两点之间的距离
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    },
    onPicked: function(){
        this.game.spawnNewStar();
        this.game.gainScore();
        this.node.destroy();
    }
});
