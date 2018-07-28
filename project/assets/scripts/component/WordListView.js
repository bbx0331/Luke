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
            type: cc.RichText
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
        cc.ET.register(cc.EventType.ET_LINK_WORD, this, this.onTrigger);
    },

    start () {

    },

    onTrigger (ptr, type) {
        if (cc.EventType.ET_HISTORY_WORD == type) {
            // word
            let word = cc.DB.getSelectHistoryWord();
            ptr.label1.string = word;
            // content
            let content = cc.DB.getWordContent(word);
            // 音标
            ptr.label2.string = content["phonogram"];
            // 简义
            ptr.label4.string = content["notes"];
            // 罗克
            let linkArray = 'hello|word'.split("|"); // content["link"].split("|");
            let len = linkArray.length;
            let lukeData = 'a hello word a'; // content["luke"].split();
            let stmp = '<size=32>';
            let pos = 0;
            for (let i = 0; i < len; ++i) {
                let word = linkArray[i];
                let index = lukeData.indexOf(word);
                if (-1 != index) {
                    stmp = stmp + '<color=#808080>' + lukeData.substring(pos, index) + '</color>'
                    + '<color=#357AF7><on click="handler">' + word + '</on></color>';
                    pos = index + word.length;
                    // 最后一个单词
                    if (len - 1 == i) {
                        stmp = stmp + '<color=#808080>' + lukeData.substring(pos, lukeData.length) + '</color></s>';
                        cc.log(stmp);
                    }
                }
                else {
                    stmp = stmp + '<color=#808080>' + lukeData + "</color></s>";
                    cc.log(stmp);
                }
            }
            ptr.label6.string = stmp;
            // 转自网络
            ptr.label8.string = content["detail"];
        }
        else if (cc.EventType.ET_SEARCH_WORD == type) {
            // word
            let word = cc.DB.getSelectSearchWord();
            ptr.label1.string = word;
            cc.DB.review(word);
            // content
            let content = cc.DB.getWordContent(word);
            // 音标
            ptr.label2.string = content["phonogram"];
            // 简义
            ptr.label4.string = content["notes"];
            // 罗克
            let linkArray = content["link"].split("|");
            let len = linkArray.length;
            let lukeData = content["luke"].split();
            let stmp = '<size=32>';
            let pos = 0;
            for (let i = 0; i < len; ++i) {
                let word = linkArray[i];
                let index = lukeData.indexOf(word);
                if (-1 != index) {
                    stmp = stmp + '<color=#808080>' + lukeData.substring(pos, index) + '</color>'
                    + '<color=#357AF7><on click="handler">' + word + '</on></color>';
                    pos = index + word.length;
                    // 最后一个单词
                    if (len - 1 == i) {
                        stmp = stmp + '<color=#808080>' + lukeData.substring(pos, lukeData.length) + '</color></s>';
                        cc.log(stmp);
                    }
                }
                else {
                    stmp = stmp + '<color=#808080>' + lukeData + "</color></s>";
                    cc.log(stmp);
                }
            }
            if (0 == len) {
                stmp = stmp + '<color=#808080>' + lukeData + "</color></s>";
                cc.log(stmp);
            }
            ptr.label6.string = stmp;
            // 转自网络
            ptr.label8.string = content["detail"];
        }
        else if (cc.EventType.ET_LINK_WORD == type) {
            // word
            let word = cc.DB.getLinkWord();
            ptr.label1.string = word;
            // content
            let content = cc.DB.getWordContent(word);
            // 音标
            ptr.label2.string = content["phonogram"];
            // 简义
            ptr.label4.string = content["notes"];
            // 罗克
            let linkArray = 'hello|word'.split("|"); // content["link"].split("|");
            let len = linkArray.length;
            let lukeData = 'a hello word a'; // content["luke"].split();
            let stmp = '<size=32>';
            let pos = 0;
            for (let i = 0; i < len; ++i) {
                let word = linkArray[i];
                let index = lukeData.indexOf(word);
                if (-1 != index) {
                    stmp = stmp + '<color=#808080>' + lukeData.substring(pos, index) + '</color>'
                    + '<color=#357AF7><on click="handler">' + word + '</on></color>';
                    pos = index + word.length;
                    // 最后一个单词
                    if (len - 1 == i) {
                        stmp = stmp + '<color=#808080>' + lukeData.substring(pos, lukeData.length) + '</color></s>';
                        cc.log(stmp);
                    }
                }
                else {
                    stmp = stmp + '<color=#808080>' + lukeData + "</color></s>";
                    cc.log(stmp);
                }
            }
            ptr.label6.string = stmp;
            // 转自网络
            ptr.label8.string = content["detail"];
        }
    },

    // update (dt) {},
});
