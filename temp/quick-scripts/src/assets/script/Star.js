"use strict";
cc._RF.push(module, '3f98arFF+RCqbKlbqcw7HGt', 'Star');
// script/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pickRadius: 0
  },
  onLoad: function onLoad() {
    console.log(this.game);
  },
  start: function start() {},
  update: function update(dt) {
    if (this.getPlayerDistance() < this.pickRadius) {
      this.onPicked();
      return;
    }

    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  },
  getPlayerDistance: function getPlayerDistance() {
    var playerPos = this.game.player.getPosition(); //计算两点之间的距离

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    this.game.spawnNewStar();
    this.game.gainScore();
    this.node.destroy();
  }
});

cc._RF.pop();