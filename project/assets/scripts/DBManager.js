
cc.Class({
    extends: cc.Component,

    properties: {
        // 字典集合
        pDictionary: Map,
        // 查找
        pWordArray: Array,
    },

    init () {
        var realUrl = cc.url.raw("resources/data/db/luke.db");
        db.DBSqlite.getInstance().initDB(realUrl);

        this.pDictionary = {};
        for (let i = 97; i < 97 + 26; ++i) {
            let key = String.fromCharCode(i);
            this.pDictionary[key] = {};
        }
    },

    filter () {

    },
});
