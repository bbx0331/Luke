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
        search: {
            default: null,
            type: cc.EditBox
        },
        cancel: {
            default: null,
            type: cc.Button
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.cancel.node.active = false;
        let panel = this.node.getChildByName("PanelSprite");
        this.panelPosition = panel.getPosition();
        this.panelContentSize = panel.getContentSize();

        cc.ET.register(cc.EventType.ET_LINK, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_HISTORY_WORD, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_BACK, this, this.onTrigger);
        cc.ET.register(cc.EventType.ET_EXIT, this, this.onTrigger);
    },

    start () {

    },

    // update (dt) {},

    onActive (ptr, event) {
        let flag = Boolean(Number(event));

        if (flag == this.cancel.node.active) {
            return;
        }
        else {
            this.cancel.node.active = flag;
            if (2 == event) {
                cc.ET.onTrigger(cc.EventType.ET_SEARCH);
            }
        }

        let panel = this.node.getChildByName("PanelSprite");
        if (this.cancel.node.active) {
            panel.setPosition(cc.p(this.panelPosition.x - 55, this.panelPosition.y));
            panel.setContentSize(cc.size(this.panelContentSize.width - 115, this.panelContentSize.height));
        }
        else {
            panel.setPosition(this.panelPosition);
            panel.setContentSize(this.panelContentSize);
        }
    },

    onSearch (ptr, event) {
        if (this.search.string.length > 0) {
            cc.DB.search(this.search.string, 50);
            cc.ET.onTrigger(cc.EventType.ET_SEARCH);
        }
    },

    onTrigger (ptr, type) {
        if (cc.EventType.ET_LINK == type) {
            let lable = ptr.node.getChildByName("CancelButton").getChildByName("Label")._components[0];
            lable.string = "返回";
        }
        else if (cc.EventType.ET_HISTORY_WORD == type) {
            ptr.onActive(ptr, 1);
        }
        else if (cc.EventType.ET_BACK == type) {
            cc.log("cc.EventType.ET_BACK");
            let lable = ptr.node.getChildByName("CancelButton").getChildByName("Label")._components[0];
            lable.string = "取消";
        }
        else if (cc.EventType.ET_EXIT == type) {
            ptr.onActive(ptr, 0);
        }
    },
});
