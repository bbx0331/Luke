
var DBManager = cc.Class({
    statics: {
        // 关键字
        sKey: "",
        // 字典集合
        pDictionary: {},
        // 历史纪录
        pHistoryArray: [],
        // 单词
        pSearchArray: [],
        // 历史索引
        iHistoryIndex: 0,
        // 搜索索引
        iSearchIndex: 0,
        // 链接
        pLinkArray: [],

        // 历史
        getHistoryWord (index) {
            return this.pHistoryArray[index] || "";
        },

        getSelectHistoryWord () {
            return this.pHistoryArray[this.iHistoryIndex] || "";
        },
        
        getHistoryWordCount () {
            return this.pHistoryArray.lenght || 10;
        },

        // 搜索
        getSearchWord (index) {
            return this.pSearchArray[index] || "";
        },

        getSelectSearchWord () {
            return this.pSearchArray[this.iSearchIndex] || "";
        },

        getSearchWordCount () {
            return this.pSearchArray.lenght || 15;
        },

        // 链接
        getLinkWord() {
            let len = this.pLinkArray.length;
            if (len > 0) {
                return this.pLinkArray[len - 1];
            }
            return "";
        },

        getLinkWordCount() {
            return this.pLinkArray.length;
        },

        pushLinkWord(word) {
            cc.log(this.pLinkArray.length);
            this.pLinkArray.splice(this.pLinkArray.length - 1, 0, word);
            for (let i = 0; i < this.pLinkArray.length; ++i) {
                cc.log(this.pLinkArray[i]);
            }
        },

        popLinkWord() {
            // this.pLinkArray.pop();
            this.pLinkArray.splice(this.pLinkArray.length - 1, 1);
            for (let i = 0; i < this.pLinkArray.length; ++i) {
                cc.log(this.pLinkArray[i]);
            }
        },

        // 内容
        getWordContent(word) {
            let first = word.substr(0, 1);
            return this.pDictionary[first][word];
        },
    
        init () {
            let realUrl = cc.url.raw("resources/data/db/luke.db");
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                let sqliteData = jsb.fileUtils.getDataFromFile(realUrl);
                realUrl = jsb.fileUtils.getWritablePath() + "resources\\data\\db\\";
                jsb.fileUtils.createDirectory(realUrl);
                realUrl = realUrl + "luke.db";
                if (!jsb.fileUtils.writeDataToFile(sqliteData, realUrl)) {
                    cc.log("Write Data To File Failure !");
                    cc.director.end();
                }
            }
            cc.log("DB path : " + realUrl);
            db.DBSqlite.getInstance().initDB(realUrl);

            this.pDictionary = {};
            this.sKey = "";
            db.DBSqlite.getInstance().regsiterCallBack(function (count, value, name) {
                this.pDictionary[this.sKey] = this.pDictionary[this.sKey] || {};
                this.pDictionary[this.sKey][value[0]] = this.pDictionary[this.sKey][value[0]] || {};
                for (let i = 1; i < count; ++i) {
                    this.pDictionary[this.sKey][value[0]][name[i]] = value[i];
                }
            }.bind(this));

            for (let i = 97; i < 97 + 26; ++i) {
                this.sKey = String.fromCharCode(i);
                db.DBSqlite.getInstance().getDataCount("select * from " +  this.sKey);
            }

            db.DBSqlite.getInstance().regsiterCallBack(function (count, value, name) {
                this.pHistoryArray.push(value[0]);
            }.bind(this));
            db.DBSqlite.getInstance().createTable("create table _history(word text);", "_history");
            db.DBSqlite.getInstance().getDataCount("select * from " + "_history");
        },

        search (word, count) {
            if ("" == word) {
                return;
            }

            this.pSearchArray = [];

            let first = word.substr(0, 1);

            let expStr = '\\b' + first + '.*?';
            for (let i = 1; i < word.length; i++) {
                expStr += word.substr(i, 1) + '.*?';
            }
            expStr += '\\b';

            let i = 0;
            for (let key in this.pDictionary[first]) {
                let exp = new RegExp(expStr);
                let unit = this.pDictionary[first][key.match(exp)];
                if (null != unit) {
                    this.pSearchArray.push(key);

                    i = i + 1;
                    if (i >= count) {
                        break;
                    }
                }
            }
        },

        review (word) {
            // 检测重复
            for (let i = 0; i < this.pHistoryArray.length; i++) {
                if (this.pHistoryArray[i] == word) {
                    cc.log("The Word [" + word + "] is in the History !");
                    return;
                }
            }

            // 处理数量
            if (this.pHistoryArray.length >= 10) {
                db.DBSqlite.getInstance().deleteData("delete from _history where word = '" + this.pHistoryArray[1] + "'");
                this.pHistoryArray.splice(0, 1);
            }
            this.pHistoryArray.push(word);
            db.DBSqlite.getInstance().insertData("insert into _history values ('" + word + "')");
        },
    }
});
