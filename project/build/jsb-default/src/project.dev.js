require = function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
}()({
  DBManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1532a9McLpNmIFJ/tIEU01s", "DBManager");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        pDictionary: Map,
        pWordArray: Array
      },
      init: function init() {
        var realUrl = cc.url.raw("resources/data/db/luke.db");
        db.DBSqlite.getInstance().initDB(realUrl);
        this.pDictionary = {};
        this.sKey = "";
        db.DBSqlite.getInstance().regsiterCallBack(function(count, value, name) {
          cc.log(this.sKey);
        }.bind(this));
        for (var i = 97; i < 123; ++i) {
          this.sKey = String.fromCharCode(i);
          db.DBSqlite.getInstance().getDataCount("select * from " + this.sKey);
        }
      },
      filter: function filter() {}
    });
    cc._RF.pop();
  }, {} ],
  EventTrigger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ae40Elm0FI16QR+9yn2FSR", "EventTrigger");
    "use strict";
    var Listener = cc.Class({
      properties: {
        ptr: null,
        fnc: null
      }
    });
    var EventTrigger = cc.Class({
      statics: {
        pListenerPool: {},
        register: function register(type, ptr, fnc) {
          this.pListenerPool[type] = this.pListenerPool[type] || [];
          var len = this.pListenerPool[type].length;
          var listener = new Listener();
          listener.ptr = ptr;
          listener.fnc = fnc;
          this.pListenerPool[type][len] = listener;
        },
        unregister: function unregister(type, ptr) {
          for (var i = 0; i < this.pListenerPool[type].length; ) if (ptr == this.pListenerPool[type][i].ptr) {
            this.pListenerPool[type][i] = null;
            this.pListenerPool[type].splice(i, 1);
          } else i += 1;
        },
        onTrigger: function onTrigger(type) {
          if (this.pListenerPool[type]) for (var i = 0; i < this.pListenerPool[type].length; ++i) {
            var listener = this.pListenerPool[type][i];
            listener.fnc(listener.ptr, type);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  EventType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b2419dmEtOYY3aNh8InU2a", "EventType");
    "use strict";
    var EventType = cc.Class({
      statics: {
        ENTER_WORD: 1,
        EXIT_WORD: 2,
        ENTER_HISTORY: 3,
        EXIT_HISTORY: 4
      }
    });
    cc._RF.pop();
  }, {} ],
  HistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a826OcXOhNrYg+ULbRdNmH", "HistoryItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        button: {
          default: null,
          type: cc.Button
        },
        label: {
          default: null,
          type: cc.Label
        },
        index: 0
      },
      onLoad: function onLoad() {
        this.button.node.on(cc.Node.EventType.TOUCH_START, this.onClickBegin, this);
        this.button.node.on(cc.Node.EventType.TOUCH_END, this.onClickEnd, this);
        this.button.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onClickCancel, this);
      },
      start: function start() {},
      updateItem: function updateItem(index, y, word) {
        this.index = index;
        this.node.y = y;
        this.label.string = word;
      },
      onClickBegin: function onClickBegin() {
        this.label.node.color = new cc.Color(255, 255, 255, 255);
      },
      onClickEnd: function onClickEnd() {
        this.label.node.color = new cc.Color(52, 122, 247, 255);
      },
      onClickCancel: function onClickCancel() {
        this.label.node.color = new cc.Color(52, 122, 247, 255);
      },
      onClick: function onClick() {
        cc.instance.ET.onTrigger(cc.instance.EventType.ENTER_WORD);
      }
    });
    cc._RF.pop();
  }, {} ],
  HistoryListView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db9fdUC+GJAA6+DAun0bRIf", "HistoryListView");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        itemPrefab: {
          default: null,
          type: cc.Prefab
        },
        itemCount: 0,
        scrollView: cc.ScrollView,
        bufferZone: 0
      },
      onLoad: function onLoad() {
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = .2;
        this.lastContentPosY = 0;
        this.itemHeight = 0;
        this.initList();
      },
      initList: function initList() {
        for (var i = 0; i < this.itemCount; ++i) {
          var item = cc.instantiate(this.itemPrefab).getComponent("HistoryItem");
          this.node.addChild(item.node);
          this.itemHeight = item.node.height;
          item.updateItem(i, -this.itemHeight * (.5 + i), "测试");
          this.itemList.push(item);
        }
        this.node.height = 100 * this.itemHeight;
      },
      start: function start() {},
      update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var buffer = this.bufferZone;
        var isDown = this.node.y < this.lastContentPosY;
        var length = this.itemList.length;
        var offset = this.itemHeight * length;
        for (var i = 0; i < length; ++i) {
          var item = this.itemList[i];
          var viewPos = this.getPositionInView(item.node);
          isDown ? viewPos.y < -buffer && item.node.y + offset < 0 && item.updateItem(item.index - length, item.node.y + offset, "测试") : viewPos.y > buffer && item.node.y - offset > -this.node.height && item.updateItem(item.index + length, item.node.y - offset, "测试");
        }
        this.lastContentPosY = this.node.y;
      },
      getPositionInView: function getPositionInView(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      }
    });
    cc._RF.pop();
  }, {} ],
  LukeScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ec15OZlO1EGLgReUeDjk3S", "LukeScript");
    "use strict";
    function initMgr() {
      cc.instance = {};
      cc.instance.EventType = require("EventType");
      cc.instance.ET = require("EventTrigger");
      var DBManager = require("DBManager");
      var db = new DBManager();
      cc.instance.DB = db;
      db.init();
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        historyListView: {
          default: null,
          type: cc.Node
        },
        searchListView: {
          default: null,
          type: cc.Node
        },
        wordListView: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        initMgr();
        this.historyListView.active = true;
        this.nodePosition = this.node.getPosition();
        cc.instance.ET.register(cc.instance.EventType.ENTER_WORD, this, this.onTrigger);
      },
      start: function start() {},
      onHistory: function onHistory() {
        this.historyListView.active = true;
        this.searchListView.active = false;
        this.wordListView.active = false;
        this.node.runAction(cc.moveTo(.2, cc.p(this.nodePosition.x, this.nodePosition.y)));
      },
      onSearch: function onSearch() {
        this.historyListView.active = false;
        this.searchListView.active = true;
        this.wordListView.active = false;
        var title = this.node.getChildByName("Title");
        var posY = this.nodePosition.y + title.getContentSize().height;
        this.node.runAction(cc.moveTo(.2, cc.p(this.nodePosition.x, posY)));
      },
      onWord: function onWord() {
        this.historyListView.active = false;
        this.searchListView.active = false;
        this.wordListView.active = true;
        var title = this.node.getChildByName("Title");
        var posY = this.nodePosition.y + title.getContentSize().height;
        this.node.runAction(cc.moveTo(.2, cc.p(this.nodePosition.x, posY)));
      },
      onTrigger: function onTrigger(ptr, type) {
        cc.instance.EventType.ENTER_WORD == type && ptr.onWord();
      }
    });
    cc._RF.pop();
  }, {
    DBManager: "DBManager",
    EventTrigger: "EventTrigger",
    EventType: "EventType"
  } ],
  SearchEditBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a5a136g9BOP5Ckb5kuN9gI", "SearchEditBox");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        search: {
          default: null,
          type: cc.EditBox
        },
        cancel: {
          default: null,
          type: cc.Button
        }
      },
      onLoad: function onLoad() {
        this.cancel.node.active = false;
        var panel = this.node.getChildByName("PanelSprite");
        this.panelPosition = panel.getPosition();
        this.panelContentSize = panel.getContentSize();
        cc.instance.ET.register(cc.instance.EventType.ENTER_WORD, this, this.onTrigger);
      },
      start: function start() {},
      onActive: function onActive(ptr, event) {
        var flag = Boolean(Number(event));
        if (flag == this.cancel.node.active) return;
        this.cancel.node.active = flag;
        var panel = this.node.getChildByName("PanelSprite");
        if (this.cancel.node.active) {
          panel.setPosition(cc.p(this.panelPosition.x - 55, this.panelPosition.y));
          panel.setContentSize(cc.size(this.panelContentSize.width - 115, this.panelContentSize.height));
        } else {
          panel.setPosition(this.panelPosition);
          panel.setContentSize(this.panelContentSize);
        }
      },
      onTrigger: function onTrigger(ptr, type) {
        cc.instance.EventType.ENTER_WORD == type && ptr.onActive(ptr, true);
      }
    });
    cc._RF.pop();
  }, {} ],
  SearchItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce990prZSdKUoHMYl2Jml8y", "SearchItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        button: {
          default: null,
          type: cc.Button
        },
        label: {
          default: null,
          type: cc.Label
        },
        index: 0
      },
      start: function start() {},
      updateItem: function updateItem(index, y, word) {
        this.index = index;
        this.node.y = y;
        this.label.string = word;
      }
    });
    cc._RF.pop();
  }, {} ],
  SearchListView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a205UlQsVI1JBS3twSSwmb", "SearchListView");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        itemPrefab: {
          default: null,
          type: cc.Prefab
        },
        itemCount: 0,
        scrollView: cc.ScrollView,
        bufferZone: 0
      },
      onLoad: function onLoad() {
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = .2;
        this.lastContentPosY = 0;
        this.itemHeight = 0;
        this.initList();
      },
      initList: function initList() {
        for (var i = 0; i < this.itemCount; ++i) {
          var item = cc.instantiate(this.itemPrefab).getComponent("SearchItem");
          this.node.addChild(item.node);
          this.itemHeight = item.node.height;
          item.updateItem(i, -this.itemHeight * (.5 + i), "");
          this.itemList.push(item);
        }
        this.node.height = 100 * this.itemHeight;
      },
      start: function start() {},
      update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var buffer = this.bufferZone;
        var isDown = this.node.y < this.lastContentPosY;
        var length = this.itemList.length;
        var offset = this.itemHeight * length;
        for (var i = 0; i < length; ++i) {
          var item = this.itemList[i];
          var viewPos = this.getPositionInView(item.node);
          isDown ? viewPos.y < -buffer && item.node.y + offset < 0 && item.updateItem(item.index - length, item.node.y + offset, "") : viewPos.y > buffer && item.node.y - offset > -this.node.height && item.updateItem(item.index + length, item.node.y - offset, "");
        }
        this.lastContentPosY = this.node.y;
      },
      getPositionInView: function getPositionInView(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "DBManager", "EventTrigger", "EventType", "HistoryItem", "HistoryListView", "LukeScript", "SearchEditBox", "SearchItem", "SearchListView" ]);