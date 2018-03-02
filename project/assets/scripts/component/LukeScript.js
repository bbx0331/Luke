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
    cc.instance = {};

    cc.instance.EventType = require("EventType");

    // 事件触发管理
    cc.instance.ET = require("EventTrigger");

    // 本地数据管理
    var DBManager = require("DBManager");
    let db = new DBManager();
    cc.instance.DB = db;
    db.init();
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
        this.historyListView.active = true;
        this.nodePosition = this.node.getPosition();

        cc.instance.ET.register(cc.instance.EventType.ENTER_WORD, this, this.onTrigger);
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

    onWord() {
        this.historyListView.active = false;
        this.searchListView.active = false;
        this.wordListView.active = true;

        let title = this.node.getChildByName("Title");
        let posY = this.nodePosition.y + title.getContentSize().height;
        this.node.runAction(cc.moveTo(0.2, cc.p(this.nodePosition.x, posY)));
    },

    onTrigger(ptr, type) {
        if (cc.instance.EventType.ENTER_WORD == type) {
            ptr.onWord();
        }
    },
});
