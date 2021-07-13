
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Game');
require('./assets/script/Player');
require('./assets/script/Star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aa3c24YPFAboeo6KxO/Iup', 'Player');
// script/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0
  },
  runJumpAction: function runJumpAction() {
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      sasing: 'sineOut'
    });
    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      sasing: 'sineOut'
    });
    var tween = cc.tween().sequence(jumpUp, jumpDown);
    this.accLeft = false;
    this.accRight = false;
    this.xSpeed = 0;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    return cc.tween().repeatForever(tween);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  update: function update(dt) {
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }

    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }

    this.node.x += this.xSpeed * dt;
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwicnVuSnVtcEFjdGlvbiIsImp1bXBVcCIsInR3ZWVuIiwiYnkiLCJ5Iiwic2FzaW5nIiwianVtcERvd24iLCJzZXF1ZW5jZSIsImFjY0xlZnQiLCJhY2NSaWdodCIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsInJlcGVhdEZvcmV2ZXIiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJub2RlIiwieCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJ0aGVuIiwic3RhcnQiLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDVEMsSUFBQUEsVUFBVSxFQUFFLENBREg7QUFFVEMsSUFBQUEsWUFBWSxFQUFFLENBRkw7QUFHVEMsSUFBQUEsWUFBWSxFQUFFLENBSEw7QUFJVEMsSUFBQUEsS0FBSyxFQUFFO0FBSkUsR0FIUDtBQVNMQyxFQUFBQSxhQVRLLDJCQVNZO0FBQ2IsUUFBSUMsTUFBTSxHQUFHVCxFQUFFLENBQUNVLEtBQUgsR0FBV0MsRUFBWCxDQUFjLEtBQUtOLFlBQW5CLEVBQWlDO0FBQUNPLE1BQUFBLENBQUMsRUFBRSxLQUFLUjtBQUFULEtBQWpDLEVBQXVEO0FBQUNTLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBQXZELENBQWI7QUFDQSxRQUFJQyxRQUFR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LEtBQUssQ0FBQ0MsT0FBYjtBQUNJLFdBQUt6QyxFQUFFLENBQUMwQyxLQUFILENBQVNDLEdBQVQsQ0FBYUMsQ0FBbEI7QUFDSSxhQUFLNUIsT0FBTCxHQUFlLEtBQWY7QUFDQTs7QUFDSixXQUFLaEIsRUFBRSxDQUFDMEMsS0FBSCxDQUFTQyxHQUFULENBQWFFLENBQWxCO0FBQ0ksYUFBSzVCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQTtBQU5SO0FBU0YsR0FsRUc7QUFtRUxzQixFQUFBQSxLQW5FSyxtQkFtRUksQ0FFUixDQXJFSSxDQXVFTDs7QUF2RUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgIGp1bXBIZWlnaHQ6IDAsXG4gICAgICAganVtcER1cmF0aW9uOiAwLFxuICAgICAgIG1heE1vdmVTcGVlZDogMCxcbiAgICAgICBhY2NlbDogMCxcbiAgICB9LFxuICAgIHJ1bkp1bXBBY3Rpb24gKCkge1xuICAgICAgICB2YXIganVtcFVwID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwge3k6IHRoaXMuanVtcEhlaWdodH0sIHtzYXNpbmc6ICdzaW5lT3V0J30pO1xuICAgICAgICB2YXIganVtcERvd24gPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7eTogLXRoaXMuanVtcEhlaWdodH0sIHtzYXNpbmc6ICdzaW5lT3V0J30pO1xuICAgICAgICB2YXIgdHdlZW4gPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCxqdW1wRG93bik7XG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XG4gICAgfSxcbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oZHQpe1xuICAgICAgICBpZih0aGlzLmFjY0xlZnQpIHtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hY2NSaWdodCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQgKXtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XG4gICAgICAgIFxuICAgIH0sXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgIHZhciBqdW1wQWN0aW9uID0gdGhpcy5ydW5KdW1wQWN0aW9uKCk7XG4gICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbikuc3RhcnQoKTtcbiAgICAgfSxcbiAgICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOiBcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICB9LFxuICAgICBvbktleVVwKCBldmVudCApe1xuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTogXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOiBcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICB9LFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1c5aFOmXZDkb9bRKXQS2Ev', 'Game');
// script/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    maxStarDuration: 0,
    minStarDuration: 0,
    ground: {
      "default": null,
      type: cc.Node
    },
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  spawnNewStar: function spawnNewStar() {
    var newStar = cc.instantiate(this.starPrefab);
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent('Star').game = this;
    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0;
    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, randY);
  },
  onLoad: function onLoad() {
    this.groundY = this.ground.y + this.ground.height / 2;
    this.timer = 0;
    this.starDuration = 0;
    this.spawnNewStar();
    this.score = 0;
  },
  start: function start() {},
  update: function update(dt) {
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1;
    this.scoreDisplay.string = 'Score : ' + this.score;
  },
  gameOver: function gameOver() {
    this.player.stopAllActions();
    cc.director.loadScene('game');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic3Bhd25OZXdTdGFyIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwic3RhckR1cmF0aW9uIiwiTWF0aCIsInJhbmRvbSIsInRpbWVyIiwicmFuZFgiLCJyYW5kWSIsImdyb3VuZFkiLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwidjIiLCJvbkxvYWQiLCJ5IiwiaGVpZ2h0Iiwic2NvcmUiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDVEMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQURIO0FBS1RDLElBQUFBLGVBQWUsRUFBRSxDQUxSO0FBTVRDLElBQUFBLGVBQWUsRUFBRSxDQU5SO0FBT1RDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkwsS0FQQztBQVdUQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpOLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZMLEtBWEM7QUFlVEUsSUFBQUEsWUFBWSxFQUFFO0FBQ1YsaUJBQVMsSUFEQztBQUVWUCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ2E7QUFGQztBQWZMLEdBSFA7QUF3Qkw7QUFDQUMsRUFBQUEsWUFBWSxFQUFFLHdCQUFVO0FBQ3BCLFFBQUlDLE9BQU8sR0FBR2YsRUFBRSxDQUFDZ0IsV0FBSCxDQUFlLEtBQUtaLFVBQXBCLENBQWQ7QUFDQSxTQUFLYSxJQUFMLENBQVVDLFFBQVYsQ0FBbUJILE9BQW5CO0FBQ0FBLElBQUFBLE9BQU8sQ0FBQ0ksV0FBUixDQUFvQixLQUFLQyxrQkFBTCxFQUFwQjtBQUNBTCxJQUFBQSxPQUFPLENBQUNNLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQTdCLEdBQW9DLElBQXBDO0FBRUEsU0FBS0MsWUFBTCxHQUFvQixLQUFLZixlQUFMLEdBQXVCZ0IsSUFBSSxDQUFDQyxNQUFMLE1BQWlCLEtBQUtsQixlQUFMLEdBQXVCLEtBQUtDLGVBQTdDLENBQTNDO0FBQ0EsU0FBS2tCLEtBQUwsR0FBYSxDQUFiO0FBQ0gsR0FqQ0k7QUFrQ0xOLEVBQUFBLGtCQUFrQixFQUFFLDhCQUFVO0FBQzFCLFFBQUlPLEtBQUssR0FBRyxDQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLE9BQUwsR0FBZUwsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUtkLE1BQUwsQ0FBWVUsWUFBWixDQUF5QixRQUF6QixFQUFtQ1MsVUFBbEUsR0FBK0UsRUFBM0Y7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS2QsSUFBTCxDQUFVZSxLQUFWLEdBQWdCLENBQTNCO0FBQ0FMLElBQUFBLEtBQUssR0FBRyxDQUFDSCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBeEIsR0FBNEJNLElBQXBDO0FBQ0EsV0FBTy9CLEVBQUUsQ0FBQ2lDLEVBQUgsQ0FBTU4sS0FBTixFQUFZQyxLQUFaLENBQVA7QUFDSCxHQXhDSTtBQXlDSk0sRUFBQUEsTUF6Q0ksb0JBeUNNO0FBQ04sU0FBS0wsT0FBTCxHQUFlLEtBQUtwQixNQUFMLENBQVkwQixDQUFaLEdBQWdCLEtBQUsxQixNQUFMLENBQVkyQixNQUFaLEdBQW1CLENBQWxEO0FBRUQsU0FBS1YsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLSCxZQUFMLEdBQW9CLENBQXBCO0FBR0MsU0FBS1QsWUFBTDtBQUNBLFNBQUt1QixLQUFMLEdBQVcsQ0FBWDtBQUVILEdBbkRHO0FBcURMQyxFQUFBQSxLQXJESyxtQkFxREksQ0FFUixDQXZESTtBQXlETEMsRUFBQUEsTUF6REssa0JBeURHQyxFQXpESCxFQXlETztBQUNSLFFBQUcsS0FBS2QsS0FBTCxHQUFhLEtBQUtILFlBQXJCLEVBQW1DO0FBQy9CLFdBQUtrQixRQUFMO0FBQ0E7QUFDSDs7QUFDRCxTQUFLZixLQUFMLElBQWNjLEVBQWQ7QUFDSCxHQS9ESTtBQWdFTEUsRUFBQUEsU0FBUyxFQUFFLHFCQUFVO0FBQ2pCLFNBQUtMLEtBQUwsSUFBYyxDQUFkO0FBQ0EsU0FBS3pCLFlBQUwsQ0FBa0IrQixNQUFsQixHQUEyQixhQUFhLEtBQUtOLEtBQTdDO0FBQ0gsR0FuRUk7QUFvRUxJLEVBQUFBLFFBQVEsRUFBRSxvQkFBVTtBQUNoQixTQUFLOUIsTUFBTCxDQUFZaUMsY0FBWjtBQUNBNUMsSUFBQUEsRUFBRSxDQUFDNkMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0g7QUF2RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICBzdGFyUHJlZmFiOiB7XG4gICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgIH0sXG4gICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxuICAgICAgIG1pblN0YXJEdXJhdGlvbjogMCxcbiAgICAgICBncm91bmQ6IHtcbiAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgIH0sXG4gICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICB9LFxuICAgICAgIHNjb3JlRGlzcGxheToge1xuICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9LFxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aC8yO1xuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgscmFuZFkpO1xuICAgIH0sXG4gICAgIG9uTG9hZCAoKSB7XG4gICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0LzI7XG4gICAgICAgICBcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcbiAgICAgICAgXG5cbiAgICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XG4gICAgICAgICB0aGlzLnNjb3JlPTA7XG5cbiAgICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmKHRoaXMudGltZXIgPiB0aGlzLnN0YXJEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgfSxcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlIDogJyArIHRoaXMuc2NvcmU7XG4gICAgfSxcbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJylcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
