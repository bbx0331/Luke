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
        itemPrefab: {
            default: null,
            type: cc.Prefab
        },
        itemCount: 0,
        scrollView: cc.ScrollView,
        bufferZone: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        this.itemHeight = 0;
        // 初始列表
        this.initList();
    },

    initList () {
        this.node.removeAllChildren();
        for (let i = 0; i < this.itemCount; ++i) {
            let item = cc.instantiate(this.itemPrefab).getComponent('SearchItem');
            this.itemHeight = item.node.height;
            this.node.addChild(item.node);
            item.updateItem(i, -this.itemHeight * (0.5 + i));
            this.itemList.push(item);
        }
        let maxCount = Math.max(cc.DB.getSearchWordCount(), this.itemCount);
        this.node.height = this.itemHeight * maxCount;
    },

    start () {
        cc.ET.register(cc.EventType.ET_SEARCH, this, this.onTrigger);
    },

    update (dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return; // we don't need to do the math every frame
        }
        this.updateTimer = 0;
        let buffer = this.bufferZone;
        let isDown = this.node.y < this.lastContentPosY; // scrolling direction
        let length = this.itemList.length;
        let offset = this.itemHeight * length;
        for (let i = 0; i < length; ++i) {
            let item = this.itemList[i]
            let viewPos = this.getPositionInView(item.node);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && item.node.y + offset < 0) {
                    item.updateItem(item.index - length, item.node.y + offset);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && item.node.y - offset > -this.node.height) {
                    item.updateItem(item.index + length, item.node.y - offset);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.node.y;
    },

    getPositionInView (item) { // get item position in scrollview's node space
        let worldPos = item.parent.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    onTrigger (ptr, type) {
        if (cc.EventType.ET_SEARCH == type) {
            ptr.onLoad();
        }
    }
});
