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
    var DBManager = cc.Class({
      statics: {
        sKey: "",
        pDictionary: {},
        pHistoryArray: [],
        pSearchArray: [],
        iHistoryIndex: 0,
        iSearchIndex: 0,
        pLinkArray: [],
        getHistoryWord: function getHistoryWord(index) {
          return this.pHistoryArray[index] || "";
        },
        getSelectHistoryWord: function getSelectHistoryWord() {
          return this.pHistoryArray[this.iHistoryIndex] || "";
        },
        getHistoryWordCount: function getHistoryWordCount() {
          return this.pHistoryArray.lenght || 10;
        },
        getSearchWord: function getSearchWord(index) {
          return this.pSearchArray[index] || "";
        },
        getSelectSearchWord: function getSelectSearchWord() {
          return this.pSearchArray[this.iSearchIndex] || "";
        },
        getSearchWordCount: function getSearchWordCount() {
          return this.pSearchArray.lenght || 15;
        },
        getLinkWord: function getLinkWord() {
          var len = this.pLinkArray.length;
          if (len > 0) return this.pLinkArray[len - 1];
          return "";
        },
        getLinkWordCount: function getLinkWordCount() {
          return this.pLinkArray.length;
        },
        pushLinkWord: function pushLinkWord(word) {
          cc.log(this.pLinkArray.length);
          this.pLinkArray.splice(this.pLinkArray.length - 1, 0, word);
          for (var i = 0; i < this.pLinkArray.length; ++i) cc.log(this.pLinkArray[i]);
        },
        popLinkWord: function popLinkWord() {
          this.pLinkArray.splice(this.pLinkArray.length - 1, 1);
          for (var i = 0; i < this.pLinkArray.length; ++i) cc.log(this.pLinkArray[i]);
        },
        getWordContent: function getWordContent(word) {
          var first = word.substr(0, 1);
          if (null != this.pDictionary[first]) return this.pDictionary[first][word];
          return null;
        },
        init: function init() {
          var realUrl = cc.url.raw("resources/data/db/luke.db");
          if (cc.sys.os == cc.sys.OS_ANDROID) {
            var sqliteData = jsb.fileUtils.getDataFromFile(realUrl);
            realUrl = jsb.fileUtils.getWritablePath() + "resources\\data\\db\\";
            jsb.fileUtils.createDirectory(realUrl);
            realUrl += "luke.db";
            if (!jsb.fileUtils.writeDataToFile(sqliteData, realUrl)) {
              cc.log("Write Data To File Failure !");
              cc.director.end();
            }
          }
          cc.log("DB path : " + realUrl);
          db.DBSqlite.getInstance().initDB(realUrl);
          this.pDictionary = {};
          this.sKey = "";
          db.DBSqlite.getInstance().regsiterCallBack(function(count, value, name) {
            this.pDictionary[this.sKey] = this.pDictionary[this.sKey] || {};
            this.pDictionary[this.sKey][value[0]] = this.pDictionary[this.sKey][value[0]] || {};
            for (var i = 1; i < count; ++i) this.pDictionary[this.sKey][value[0]][name[i]] = value[i];
          }.bind(this));
          for (var i = 97; i < 123; ++i) {
            this.sKey = String.fromCharCode(i);
            db.DBSqlite.getInstance().getDataCount("select * from " + this.sKey);
          }
          db.DBSqlite.getInstance().regsiterCallBack(function(count, value, name) {
            this.pHistoryArray.push(value[0]);
          }.bind(this));
          db.DBSqlite.getInstance().createTable("create table _history(word text);", "_history");
          db.DBSqlite.getInstance().getDataCount("select * from _history");
        },
        search: function search(word, count) {
          if ("" == word) return;
          this.pSearchArray = [];
          var first = word.substr(0, 1);
          var expStr = "\\b" + first + ".*?";
          for (var _i = 1; _i < word.length; _i++) expStr += word.substr(_i, 1) + ".*?";
          expStr += "\\b";
          var i = 0;
          for (var key in this.pDictionary[first]) {
            var exp = new RegExp(expStr);
            var unit = this.pDictionary[first][key.match(exp)];
            if (null != unit) {
              this.pSearchArray.push(key);
              i += 1;
              if (i >= count) break;
            }
          }
        },
        review: function review(word) {
          for (var i = 0; i < this.pHistoryArray.length; i++) if (this.pHistoryArray[i] == word) {
            cc.log("The Word [" + word + "] is in the History !");
            return;
          }
          if (this.pHistoryArray.length >= 10) {
            db.DBSqlite.getInstance().deleteData("delete from _history where word = '" + this.pHistoryArray[1] + "'");
            this.pHistoryArray.splice(0, 1);
          }
          this.pHistoryArray.push(word);
          db.DBSqlite.getInstance().insertData("insert into _history values ('" + word + "')");
        }
      }
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
        ET_HISTORY: 1,
        ET_SEARCH: 2,
        ET_LINK: 3,
        ET_HISTORY_WORD: 4,
        ET_SEARCH_WORD: 5,
        ET_LINK_WORD: 6,
        ET_BACK: 7,
        ET_EXIT: 8
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
      updateItem: function updateItem(index, y) {
        this.index = index;
        this.node.y = y;
        this.label.string = cc.DB.getHistoryWord(index);
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
        if (cc.DB.getHistoryWord(this.index).length > 0) {
          cc.DB.iHistoryIndex = this.index;
          cc.ET.onTrigger(cc.EventType.ET_HISTORY_WORD);
        }
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
        this.node.removeAllChildren();
        for (var i = 0; i < this.itemCount; ++i) {
          var item = cc.instantiate(this.itemPrefab).getComponent("HistoryItem");
          this.itemHeight = item.node.height;
          this.node.addChild(item.node);
          item.updateItem(i, -this.itemHeight * (.5 + i));
          this.itemList.push(item);
        }
        var maxCount = Math.max(cc.DB.getHistoryWordCount(), this.itemCount);
        this.node.height = this.itemHeight * maxCount;
      },
      start: function start() {
        cc.ET.register(cc.EventType.ET_HISTORY, this, this.onTrigger);
      },
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
          isDown ? viewPos.y < -buffer && item.node.y + offset < 0 && item.updateItem(item.index - length, item.node.y + offset) : viewPos.y > buffer && item.node.y - offset > -this.node.height && item.updateItem(item.index + length, item.node.y - offset);
        }
        this.lastContentPosY = this.node.y;
      },
      getPositionInView: function getPositionInView(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      },
      onTrigger: function onTrigger(ptr, type) {
        cc.EventType.ET_HISTORY == type && ptr.onLoad();
      }
    });
    cc._RF.pop();
  }, {} ],
  LinkScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08b52XzOzpA57IDdgVjjyDJ", "LinkScript");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {},
      handler: function handler(event) {
        var labelSegments = event.target._components[0]._labelSegments;
        for (var i = 0; i < labelSegments.length; ++i) {
          var labelSegment = labelSegments[i];
          if (cc.rectContainsPoint(labelSegment.getBoundingBoxToWorld(), event.touch.getLocation())) {
            var word = labelSegment.getString();
            if (null != cc.DB.getWordContent(word)) {
              cc.DB.pushLinkWord(word);
              cc.ET.onTrigger(cc.EventType.ET_LINK_WORD);
              cc.ET.onTrigger(cc.EventType.ET_LINK);
            }
            break;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LukeScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ec15OZlO1EGLgReUeDjk3S", "LukeScript");
    "use strict";
    function initMgr() {
      cc.EventType = require("EventType");
      cc.ET = require("EventTrigger");
      cc.DB = require("DBManager");
      cc.DB.init();
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
        this.eventType = cc.EventType.ET_EXIT;
        this.historyListView.active = true;
        this.nodePosition = this.node.getPosition();
        cc.ET.register(cc.EventType.ET_SEARCH, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_HISTORY_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_SEARCH_WORD, this, this.onTrigger);
      },
      start: function start() {},
      onHistory: function onHistory() {
        this.node.stopAllActions();
        this.node.runAction(cc.moveTo(.2, cc.p(this.nodePosition.x, this.nodePosition.y)));
        this.historyListView.active = true;
        this.searchListView.active = false;
        this.wordListView.active = false;
      },
      onSearch: function onSearch() {
        var title = this.node.getChildByName("Title");
        var posY = this.nodePosition.y + title.getContentSize().height;
        this.node.stopAllActions();
        this.node.runAction(cc.moveTo(.2, cc.p(this.nodePosition.x, posY)));
        this.historyListView.active = false;
        this.searchListView.active = true;
        this.wordListView.active = false;
      },
      onWord: function onWord() {
        var title = this.node.getChildByName("Title");
        var posY = this.nodePosition.y + title.getContentSize().height;
        this.node.stopAllActions();
        this.node.runAction(cc.moveTo(.2, cc.p(this.nodePosition.x, posY)));
        this.historyListView.active = false;
        this.searchListView.active = false;
        this.wordListView.active = true;
      },
      onCancel: function onCancel() {
        cc.log(this.eventType);
        if (cc.EventType.ET_HISTORY_WORD == this.eventType) {
          if (0 != cc.DB.getLinkWordCount()) {
            cc.DB.popLinkWord();
            if (0 == cc.DB.getLinkWordCount()) {
              cc.ET.onTrigger(cc.EventType.ET_HISTORY_WORD);
              cc.ET.onTrigger(cc.EventType.ET_BACK);
            } else cc.ET.onTrigger(cc.EventType.ET_LINK_WORD);
            return;
          }
          this.onHistory();
          cc.ET.onTrigger(cc.EventType.ET_HISTORY);
          cc.ET.onTrigger(cc.EventType.ET_EXIT);
        } else if (cc.EventType.ET_SEARCH_WORD == this.eventType) {
          if (0 != cc.DB.getLinkWordCount()) {
            cc.DB.popLinkWord();
            if (0 == cc.DB.getLinkWordCount()) {
              cc.ET.onTrigger(cc.EventType.ET_SEARCH_WORD);
              cc.ET.onTrigger(cc.EventType.ET_BACK);
            } else cc.ET.onTrigger(cc.EventType.ET_LINK_WORD);
            return;
          }
          this.onSearch();
        } else {
          this.onHistory();
          cc.ET.onTrigger(cc.EventType.ET_EXIT);
        }
        this.eventType = cc.EventType.ET_EXIT;
      },
      onTrigger: function onTrigger(ptr, type) {
        if (cc.EventType.ET_SEARCH == type) {
          ptr.onSearch();
          ptr.eventType = type;
        } else if (cc.EventType.ET_HISTORY_WORD == type || cc.EventType.ET_SEARCH_WORD == type) {
          ptr.onWord();
          ptr.eventType = type;
        }
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
        cc.ET.register(cc.EventType.ET_LINK, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_HISTORY_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_BACK, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_EXIT, this, this.onTrigger);
      },
      start: function start() {},
      onActive: function onActive(ptr, event) {
        var flag = Boolean(Number(event));
        if (flag == this.cancel.node.active) return;
        this.cancel.node.active = flag;
        2 == event && cc.ET.onTrigger(cc.EventType.ET_SEARCH);
        var panel = this.node.getChildByName("PanelSprite");
        if (this.cancel.node.active) {
          panel.setPosition(cc.p(this.panelPosition.x - 55, this.panelPosition.y));
          panel.setContentSize(cc.size(this.panelContentSize.width - 115, this.panelContentSize.height));
        } else {
          panel.setPosition(this.panelPosition);
          panel.setContentSize(this.panelContentSize);
        }
      },
      onSearch: function onSearch(ptr, event) {
        if (this.search.string.length > 0) {
          cc.DB.search(this.search.string, 50);
          cc.ET.onTrigger(cc.EventType.ET_SEARCH);
        }
      },
      onTrigger: function onTrigger(ptr, type) {
        if (cc.EventType.ET_LINK == type) {
          var lable = ptr.node.getChildByName("CancelButton").getChildByName("Label")._components[0];
          lable.string = "返回";
        } else if (cc.EventType.ET_HISTORY_WORD == type) ptr.onActive(ptr, 1); else if (cc.EventType.ET_BACK == type) {
          cc.log("cc.EventType.ET_BACK");
          var _lable = ptr.node.getChildByName("CancelButton").getChildByName("Label")._components[0];
          _lable.string = "取消";
        } else cc.EventType.ET_EXIT == type && ptr.onActive(ptr, 0);
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
      onLoad: function onLoad() {
        this.button.node.on(cc.Node.EventType.TOUCH_START, this.onClickBegin, this);
        this.button.node.on(cc.Node.EventType.TOUCH_END, this.onClickEnd, this);
        this.button.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onClickCancel, this);
      },
      start: function start() {},
      updateItem: function updateItem(index, y) {
        this.index = index;
        this.node.y = y;
        this.label.string = cc.DB.getSearchWord(index);
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
        if (cc.DB.getSearchWord(this.index).length > 0) {
          cc.DB.iSearchIndex = this.index;
          cc.ET.onTrigger(cc.EventType.ET_SEARCH_WORD);
        }
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
        this.node.removeAllChildren();
        for (var i = 0; i < this.itemCount; ++i) {
          var item = cc.instantiate(this.itemPrefab).getComponent("SearchItem");
          this.itemHeight = item.node.height;
          this.node.addChild(item.node);
          item.updateItem(i, -this.itemHeight * (.5 + i));
          this.itemList.push(item);
        }
        var maxCount = Math.max(cc.DB.getSearchWordCount(), this.itemCount);
        this.node.height = this.itemHeight * maxCount;
      },
      start: function start() {
        cc.ET.register(cc.EventType.ET_SEARCH, this, this.onTrigger);
      },
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
          isDown ? viewPos.y < -buffer && item.node.y + offset < 0 && item.updateItem(item.index - length, item.node.y + offset) : viewPos.y > buffer && item.node.y - offset > -this.node.height && item.updateItem(item.index + length, item.node.y - offset);
        }
        this.lastContentPosY = this.node.y;
      },
      getPositionInView: function getPositionInView(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      },
      onTrigger: function onTrigger(ptr, type) {
        cc.EventType.ET_SEARCH == type && ptr.onLoad();
      }
    });
    cc._RF.pop();
  }, {} ],
  WordListView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20e38NDSIZD9pVYXb9HDnwD", "WordListView");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label1: {
          default: null,
          type: cc.Label
        },
        label2: {
          default: null,
          type: cc.Label
        },
        node3: {
          default: null,
          type: cc.Node
        },
        label4: {
          default: null,
          type: cc.Label
        },
        node5: {
          default: null,
          type: cc.Node
        },
        label6: {
          default: null,
          type: cc.Label
        },
        node7: {
          default: null,
          type: cc.Node
        },
        label8: {
          default: null,
          type: cc.RichText
        },
        node9: {
          default: null,
          type: cc.Node
        },
        label10: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        cc.ET.register(cc.EventType.ET_HISTORY_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_SEARCH_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_LINK_WORD, this, this.onTrigger);
      },
      start: function start() {},
      onTrigger: function onTrigger(ptr, type) {
        cc.EventType.ET_HISTORY_WORD == type ? ptr.setWordContent(cc.DB.getSelectHistoryWord()) : cc.EventType.ET_SEARCH_WORD == type ? ptr.setWordContent(cc.DB.getSelectSearchWord()) : cc.EventType.ET_LINK_WORD == type && ptr.setWordContent(cc.DB.getLinkWord());
      },
      isEmpty: function isEmpty(word) {
        if ("undefined" == typeof word || null == word || "" == word) return true;
        return false;
      },
      setWordContent: function setWordContent(word) {
        var ptr = this;
        ptr.label1.string = word;
        var content = cc.DB.getWordContent(word);
        if (null == content) return;
        var phonogram = content["phonogram"];
        ptr.label2.node.active = true;
        ptr.isEmpty(phonogram) ? ptr.label2.node.active = false : ptr.label2.string = phonogram;
        var notes = content["notes"];
        ptr.node3.active = true;
        ptr.isEmpty(notes) ? ptr.node3.active = false : ptr.label4.string = notes;
        var luke = content["luke"];
        ptr.node5.active = true;
        ptr.isEmpty(luke) ? ptr.node5.active = false : ptr.label6.string = luke;
        var linkArray = content["link"].split("/");
        ptr.node7.active = true;
        var len = linkArray.length;
        if (len > 1) {
          var stmp = "<size=32>";
          for (var i = 0; i < len; ++i) {
            stmp = stmp + '<color=#357AF7><on click="handler">' + linkArray[i] + "</on></color>";
            len - 1 != i && (stmp += "<color=#808080>, </color></s>");
          }
          stmp += "</s>";
          ptr.label8.string = stmp;
        } else ptr.node7.active = false;
        var detail = content["detail"];
        ptr.node9.active = true;
        ptr.isEmpty(detail) ? ptr.node9.active = false : ptr.label10.string = detail;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "DBManager", "EventTrigger", "EventType", "HistoryItem", "HistoryListView", "LinkScript", "LukeScript", "SearchEditBox", "SearchItem", "SearchListView", "WordListView" ]);
//# sourceMappingURL=project.dev.js.map