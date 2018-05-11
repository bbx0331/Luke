#include "external/DBSqlite.h"
#include "cocos2d.h"

DBSqlite::DBSqlite()
{

}

DBSqlite::~DBSqlite()
{

}

// 创建数据库 
void DBSqlite::initDB(const char* db)
{
	// 打开一个数据库，如果该数据库不存在，则创建一个数据库文件  
	int result = sqlite3_open(db, &m_pDBSqlite);
	if (SQLITE_OK != result)
	{
		CCLOG("打开数据库失败，错误码:%d ，错误原因:%s\n", result, sqlite3_errstr(result));
	}
}

// existTable的回调函数  
int existCallBack(void * para, int n_column, char ** column_value, char ** column_name)
{
	bool *isExisted_ = (bool*)para;
	*isExisted_ = (**column_value) != '0';
	return 0;
}

// 用来判断表格是否存在  
// name:表示表名  
bool DBSqlite::existTable(std::string name)
{
	if (nullptr != m_pDBSqlite)
	{
		// 判断表是否存在  
		bool isExisted;
		std::string sqlstr = "select count(type) from sqlite_master where type='table' and name ='" + name + "'";
		int result = sqlite3_exec(m_pDBSqlite, sqlstr.c_str(), existCallBack, &isExisted, &m_pErrMsg);
		return isExisted;
	}
	return false;
}

// 在数据库中判断名为name的表示否存在，如果不存在则创建这张表  
// @示例语句string sqlstr = "create table user(id integer,username text,password text)";  
void DBSqlite::createTable(std::string sql, std::string name)
{
	if (!existTable(name))
	{
		// 创建表，设置ID为主键，且自动增加  
		int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
		if (SQLITE_OK != result)
		{
			CCLOG("创建表失败，错误码:%d ，错误原因:%s\n", result, m_pErrMsg);
		}
	}
}

// 删除表格  
// @示例语句string sqlstr = "drop table name";  
void DBSqlite::deleteTable(std::string sql, std::string name)
{
	if (existTable(name))
	{
		int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
		if (SQLITE_OK != result)
		{
			CCLOG("删除表失败，错误码:%d ，错误原因:%s\n", result, m_pErrMsg);
		}
	}
}

// 插入数据  
// @示例语句string sqlstr = " insert into MyTable_1( name ) values ( '擎天柱' ) ";  
void DBSqlite::insertData(std::string sql)
{
	int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
	if (SQLITE_OK != result)
	{
		CCLOG("插入记录失败，错误码:%d ，错误原因:%s\n", result, m_pErrMsg);
	}
}

// 删除数据  
// @示例语句string sqlstr = "delete from MyTable_1 where ID = 2";  
void DBSqlite::deleteData(std::string sql)
{
	int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
	if (SQLITE_OK != result)
	{
		CCLOG("删除记录失败，错误码:%d ，错误原因:%s\n", result, m_pErrMsg);
	}
}

// 修改数据  
// @示例语句string sqlstr = "update MyTable_1 set name='威震天' where ID = 3"; 
void DBSqlite::updateData(std::string sql)
{
	int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
	if (SQLITE_OK != result)
	{
		CCLOG("修改记录失败，错误码:%d ，错误原因:%s\n", result, m_pErrMsg);
	}
}

// getDataCount的回调函数  
int loadRecordCount(void * para, int n_column, char ** column_value, char ** column_name)
{
	int *count = (int*)para;
	*count = n_column;
	return 0;
}

// 获取记录的条数  
// @示例语句string sqlstr = "select count(*) from user";  
// @示例语句  取得表格字段的语句string sqlstr = "select * from user";  
int DBSqlite::getDataCount(std::string sql)
{
	int count = 0;
	sqlite3_exec(m_pDBSqlite, sql.c_str(), loadRecordCount, &count, &m_pErrMsg);
	return count;
}

// getDataInfo的回调函数  
int loadRecord(void * para, int n_column, char ** column_value, char ** column_name)
{
	return 0;
}

// 读取一条记录的信息  
/*
*  此方法是查询方法，相当之重要，pSender最好是个vector
*/
void DBSqlite::getDataInfo(std::string sql, void* pSend)
{
	sqlite3_exec(m_pDBSqlite, sql.c_str(), loadRecord, pSend, &m_pErrMsg);
}

// 关闭打开的数据库  
void DBSqlite::disposeDB()
{
	sqlite3_close(m_pDBSqlite);
}
