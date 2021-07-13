
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsIm9uUGlja2VkIiwib3BhY2l0eVJhdGlvIiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJtaW5PcGFjaXR5Iiwibm9kZSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiLCJwbGF5ZXJQb3MiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJwb3NpdGlvbiIsInN1YiIsIm1hZyIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNUQyxJQUFBQSxVQUFVLEVBQUU7QUFESCxHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUs7QUFDTkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsSUFBakI7QUFDSCxHQVJJO0FBU0xDLEVBQUFBLEtBVEssbUJBU0ksQ0FFUixDQVhJO0FBWUxDLEVBQUFBLE1BQU0sRUFBRSxnQkFBU0MsRUFBVCxFQUFhO0FBQ2pCLFFBQUcsS0FBS0MsaUJBQUwsS0FBMkIsS0FBS1IsVUFBbkMsRUFBOEM7QUFDMUMsV0FBS1MsUUFBTDtBQUNBO0FBQ0g7O0FBQ0QsUUFBSUMsWUFBWSxHQUFHLElBQUksS0FBS04sSUFBTCxDQUFVTyxLQUFWLEdBQWtCLEtBQUtQLElBQUwsQ0FBVVEsWUFBbkQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE9BQVYsR0FBb0JGLFVBQVUsR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdQLFlBQVksSUFBSSxNQUFNRyxVQUFWLENBQXZCLENBQWpDO0FBQ0gsR0FwQkk7QUFxQkxMLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFVO0FBRXpCLFFBQUlVLFNBQVMsR0FBRyxLQUFLZCxJQUFMLENBQVVlLE1BQVYsQ0FBaUJDLFdBQWpCLEVBQWhCLENBRnlCLENBR3pCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLUCxJQUFMLENBQVVRLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCTCxTQUF2QixFQUFrQ00sR0FBbEMsRUFBWDtBQUNBLFdBQU9ILElBQVA7QUFDSCxHQTNCSTtBQTRCTFosRUFBQUEsUUFBUSxFQUFFLG9CQUFVO0FBQ2hCLFNBQUtMLElBQUwsQ0FBVXFCLFlBQVY7QUFDQSxTQUFLckIsSUFBTCxDQUFVc0IsU0FBVjtBQUNBLFNBQUtaLElBQUwsQ0FBVWEsT0FBVjtBQUNIO0FBaENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICBwaWNrUmFkaXVzOiAwLFxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lKVxuICAgIH0sXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGR0KSB7XG4gICAgICAgIGlmKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cyl7XG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wYWNpdHlSYXRpbyA9IDEgLSB0aGlzLmdhbWUudGltZXIgLyB0aGlzLmdhbWUuc3RhckR1cmF0aW9uO1xuICAgICAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IG1pbk9wYWNpdHkgKyBNYXRoLmZsb29yKG9wYWNpdHlSYXRpbyAqICgyNTUgLSBtaW5PcGFjaXR5KSk7XG4gICAgfSxcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIC8v6K6h566X5Lik54K55LmL6Ze055qE6Led56a7XG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xuICAgICAgICByZXR1cm4gZGlzdDtcbiAgICB9LFxuICAgIG9uUGlja2VkOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmdhbWUuc3Bhd25OZXdTdGFyKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59KTtcbiJdfQ==