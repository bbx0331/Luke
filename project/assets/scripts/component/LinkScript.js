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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    handler (event) {
        let labelSegments = event.target._components[0]._labelSegments;
        for (let i = 0; i < labelSegments.length; ++i) {
            var labelSegment = labelSegments[i];
            if (cc.rectContainsPoint(labelSegment.getBoundingBoxToWorld(), event.touch.getLocation())) {
                let word = labelSegment.getString();
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
