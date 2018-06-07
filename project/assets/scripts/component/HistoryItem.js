// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

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
        button: {
            default: null,
            type: cc.Button
        },
        label: {
            default: null,
            type: cc.Label
        },
        index: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.button.node.on(cc.Node.EventType.TOUCH_START, this.onClickBegin, this);
        this.button.node.on(cc.Node.EventType.TOUCH_END, this.onClickEnd, this);
        this.button.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onClickCancel, this);
    },

    start () {
        
    },

    // update (dt) {},

    updateItem (index, y, word) {
        this.index = index;
        this.node.y = y;
        this.label.string = word;
    },

    onClickBegin () {
        this.label.node.color = new cc.Color(255, 255, 255, 255);
    },

    onClickEnd () {
        this.label.node.color = new cc.Color(52, 122, 247, 255);
    },

    onClickCancel () {
        this.label.node.color = new cc.Color(52, 122, 247, 255);
    },

    onClick () {
        cc.ET.onTrigger(cc.EventType.ENTER_WORD);
    },
});
