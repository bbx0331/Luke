
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
        this.sKey = "";
        db.DBSqlite.getInstance().regsiterCallBack(function (count, value, name) {
            this.pDictionary[this.sKey] = this.pDictionary[this.sKey] || {};
            this.pDictionary[this.sKey][value[0]] = {};
            for (let i = 1; i < count; ++i) {
                this.pDictionary[this.sKey][value[0]][name[i]] = value[i];
            }
        }.bind(this));

        for (let i = 97; i < 97 + 26; ++i) {
            this.sKey = String.fromCharCode(i);
            db.DBSqlite.getInstance().getDataCount("select * from " +  this.sKey);
        }
    },

    search (word, count) {
        let first = word.substr(0, 1);

        let expStr = '\\b' + first + '.*?';
        for (let i = 1; i < word.length; ++i) {
            expStr += word.substr(i, i + 1) + '.*?';
        };
        expStr += '\\b';

        for (let key in this.pDictionary[first]) {
            let exp = new RegExp(expStr);
            cc.log(key.match(exp));
        }
        
        let array = {};
        return 0;
    },
});
