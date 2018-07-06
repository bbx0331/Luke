
var Listener = cc.Class({
    properties : {
        ptr: null,
        fnc: null,
    },
});

var EventTrigger = cc.Class({
    statics: {
        pListenerPool: {},
        
        register (type, ptr, fnc) {
            this.pListenerPool[type] = this.pListenerPool[type] || [];
            let len = this.pListenerPool[type].length;
            let listener = new Listener();
            listener.ptr = ptr;
            listener.fnc = fnc;
            this.pListenerPool[type][len] = listener;
        },
    
        unregister (type, ptr) {
            for (let i = 0; i < this.pListenerPool[type].length;) {
                if (ptr == this.pListenerPool[type][i].ptr) {
                    this.pListenerPool[type][i] = null;
                    this.pListenerPool[type].splice(i, 1);
                }
                else {
                    i = i + 1;
                }
            }
        },
    
        onTrigger (type) {
            if (this.pListenerPool[type]) {
                for (let i = 0; i < this.pListenerPool[type].length; ++i) {
                    let listener = this.pListenerPool[type][i];
                    listener.fnc(listener.ptr, type);
                }
            }
        },
    },
});
