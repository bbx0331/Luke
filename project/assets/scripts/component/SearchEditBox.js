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

        cc.instance.ET.register(cc.instance.EventType.ENTER_WORD, this, this.onTrigger);
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

    onTrigger (ptr, type) {
        if (cc.instance.EventType.ENTER_WORD == type) {
            ptr.onActive(ptr, true);
        }
    },
});