
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