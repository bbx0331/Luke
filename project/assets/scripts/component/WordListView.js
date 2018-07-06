// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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
        label1: {
            default: null,
            type: cc.Label
        },

        label2: {
            default: null,
            type: cc.Label
        },

        label3: {
            default: null,
            type: cc.Label
        },

        label4: {
            default: null,
            type: cc.Label
        },

        label5: {
            default: null,
            type: cc.Label
        },

        label6: {
            default: null,
            type: cc.Label
        },

        label7: {
            default: null,
            type: cc.Label
        },

        label8: {
            default: null,
            type: cc.Label
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.ET.register(cc.EventType.ET_HISTORY_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_SEARCH_WORD, this, this.onTrigger);
    },

    start () {

    },

    onTrigger (ptr, type) {
        if (cc.EventType.ET_SEARCH_WORD == type) {
            // word
            let word = cc.DB.getSelectSearchWord();
            ptr.label1.string = word;
            cc.DB.review(word);
            // content
            let content = cc.DB.getSelectSearchWordContent();
            // 音标
            ptr.label2.string = content["phonogram"];
            // 简义
            ptr.label4.string = content["notes"];
            // 罗克
            ptr.label6.string = content["luke"];
            // 转自网络
            ptr.label8.string = content["detail"];
        }
        else if (cc.EventType.ET_HISTORY_WORD == type) {
            // word
            ptr.label1.string = cc.DB.getSelectHistoryWord();
            // content
            let content = cc.DB.getSelectHistoryWordContent();
            // 音标
            ptr.label2.string = content["phonogram"];
            // 简义
            ptr.label4.string = content["notes"];
            // 罗克
            ptr.label6.string = content["luke"];
            // 转自网络
            ptr.label8.string = content["detail"];
        }
    },

    // update (dt) {},
});
