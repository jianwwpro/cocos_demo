
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