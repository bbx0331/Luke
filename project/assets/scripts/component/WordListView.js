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
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.ET.register(cc.EventType.ET_HISTORY_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_SEARCH_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_LINK_WORD, this, this.onTrigger);
    },

    start () {

    },

    onTrigger (ptr, type) {
        if (cc.EventType.ET_HISTORY_WORD == type) {
            // word
            ptr.setWordContent(cc.DB.getSelectHistoryWord());
        }
        else if (cc.EventType.ET_SEARCH_WORD == type) {
            // word
            ptr.setWordContent(cc.DB.getSelectSearchWord());
        }
        else if (cc.EventType.ET_LINK_WORD == type) {
            // word
            ptr.setWordContent(cc.DB.getLinkWord());
        }
    },

    isEmpty (word) {
        if (typeof word == "undefined" || word == null || word == "") {
            return true;
        }
        return false;
    },

    setWordContent (word) {
        let ptr = this;
        // word
        ptr.label1.string = word;
        // content
        let content = cc.DB.getWordContent(word);
        if (null == content) {
            return;
        }
        // 音标
        let phonogram = content["phonogram"];
        ptr.label2.node.active = true;
        if (ptr.isEmpty(phonogram)) {
            ptr.label2.node.active = false;
        }
        else {
            ptr.label2.string = phonogram;
        }
        // 简义
        let notes = content["notes"];
        ptr.node3.active = true;
        if (ptr.isEmpty(notes)) {
            ptr.node3.active = false;
        }
        else {
            ptr.label4.string = notes;
        }
        // 罗克
        let luke = content["luke"];
        ptr.node5.active = true;
        if (ptr.isEmpty(luke)) {
            ptr.node5.active = false;
        }
        else {
            ptr.label6.string = luke;
        }
        // let linkArray = content["link"].split("|");
        // let len = linkArray.length;
        // let lukeData = content["luke"].split();
        // let stmp = '<size=32>';
        // let pos = 0;
        // for (let i = 0; i < len; ++i) {
        //     let word = linkArray[i];
        //     let index = lukeData.indexOf(word);
        //     if (-1 != index) {
        //         stmp = stmp + '<color=#808080>' + lukeData.substring(pos, index) + '</color>'
        //         + '<color=#357AF7><on click="handler">' + word + '</on></color>';
        //         pos = index + word.length;
        //         // 最后一个单词
        //         if (len - 1 == i) {
        //             stmp = stmp + '<color=#808080>' + lukeData.substring(pos, lukeData.length) + '</color></s>';
        //             cc.log(stmp);
        //         }
        //     }
        //     else {
        //         stmp = stmp + '<color=#808080>' + lukeData + '</color></s>';
        //         cc.log(stmp);
        //     }
        // }
        // if (0 == len) {
        //     stmp = stmp + '<color=#808080>' + lukeData + '</color></s>';
        //     cc.log(stmp);
        // }
        // ptr.label6.string = stmp;
        // 关联
        let linkArray = content["link"].split("/");
        ptr.node7.active = true;
        let len = linkArray.length;
        if (len > 1) {
            let stmp = '<size=32>';
            for (let i = 0; i < len; ++i) {
                stmp = stmp + '<color=#357AF7><on click="handler">' + linkArray[i] + '</on></color>';
                if (len - 1 != i) {
                    stmp = stmp + '<color=#808080>, </color></s>';
                }
            }
            stmp = stmp + '</s>';
            ptr.label8.string = stmp;
        }
        else {
            ptr.node7.active = false;
        }
        // 转自网络
        let detail = content["detail"];
        ptr.node9.active = true;
        if (ptr.isEmpty(detail)) {
            ptr.node9.active = false;
        }
        else {
            ptr.label10.string = detail;
        }
    }
    // update (dt) {},
});
