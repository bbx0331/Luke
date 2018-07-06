// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

function initMgr () {
    // 事件
    cc.EventType = require("EventType");

    // 事件触发管理
    cc.ET = require("EventTrigger");

    // 本地数据管理
    cc.DB = require("DBManager");
    cc.DB.init();
}

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
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
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        initMgr();
        this.eventType = cc.EventType.ET_EXIT;
        this.historyListView.active = true;
        this.nodePosition = this.node.getPosition();

        cc.ET.register(cc.EventType.ET_HISTORY_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_SEARCH_WORD, this, this.onTrigger);
    },

    start () {

    },

    // update (dt) {},
    
    onHistory () {
        this.historyListView.active = true;
        this.searchListView.active = false;
        this.wordListView.active = false;
        
        this.node.runAction(cc.moveTo(0.2, cc.p(this.nodePosition.x, this.nodePosition.y)));
    },

    onSearch () {
        this.historyListView.active = false;
        this.searchListView.active = true;
        this.wordListView.active = false;

        let title = this.node.getChildByName("Title");
        let posY = this.nodePosition.y + title.getContentSize().height;
        this.node.runAction(cc.moveTo(0.2, cc.p(this.nodePosition.x, posY)));
    },

    onWord () {
        this.historyListView.active = false;
        this.searchListView.active = false;
        this.wordListView.active = true;

        let title = this.node.getChildByName("Title");
        let posY = this.nodePosition.y + title.getContentSize().height;
        this.node.runAction(cc.moveTo(0.2, cc.p(this.nodePosition.x, posY)));
    },

    onCancel () {
        if (cc.EventType.ET_SEARCH_WORD == this.eventType) {
            this.onSearch();
        }
        else {
            this.onHistory();
            cc.ET.onTrigger(cc.EventType.ET_HISTORY);
            cc.ET.onTrigger(cc.EventType.ET_EXIT);
        }
        this.eventType = cc.EventType.ET_EXIT;
    },

    onTrigger (ptr, type) {
        if (cc.EventType.ET_HISTORY_WORD == type || cc.EventType.ET_SEARCH_WORD == type) {
            ptr.onWord();
        }
        ptr.eventType = type;

    },
});
