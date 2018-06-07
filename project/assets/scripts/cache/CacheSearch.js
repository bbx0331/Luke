
var CacheSearch = cc.Class({
    properties: {
        pWordArray: Array,
    },
    
    getWord : function (index) {
        return this.pWordArray[index] || "";
    },

    getWordCount : function () {
        return this.pWordArray.lenght();
    },
});
