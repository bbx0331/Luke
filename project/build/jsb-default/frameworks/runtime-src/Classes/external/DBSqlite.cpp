#include "external/DBSqlite.h"
#include "cocos2d.h"

DBSqlite::DBSqlite()
{

}

DBSqlite::~DBSqlite()
{

}

// �������ݿ� 
void DBSqlite::initDB(const char* db)
{
	// ��һ�����ݿ⣬��������ݿⲻ���ڣ��򴴽�һ�����ݿ��ļ�  
	int result = sqlite3_open(db, &m_pDBSqlite);
	if (SQLITE_OK != result)
	{
		CCLOG("�����ݿ�ʧ�ܣ�������:%d ������ԭ��:%s\n", result, sqlite3_errstr(result));
	}
}

// existTable�Ļص�����  
int existCallBack(void * para, int n_column, char ** column_value, char ** column_name)
{
	bool *isExisted_ = (bool*)para;
	*isExisted_ = (**column_value) != '0';
	return 0;
}

// �����жϱ����Ƿ����  
// name:��ʾ����  
bool DBSqlite::existTable(std::string name)
{
	if (nullptr != m_pDBSqlite)
	{
		// �жϱ��Ƿ����  
		bool isExisted;
		std::string sqlstr = "select count(type) from sqlite_master where type='table' and name ='" + name + "'";
		int result = sqlite3_exec(m_pDBSqlite, sqlstr.c_str(), existCallBack, &isExisted, &m_pErrMsg);
		return isExisted;
	}
	return false;
}

// �����ݿ����ж���Ϊname�ı�ʾ����ڣ�����������򴴽����ű�  
// @ʾ�����string sqlstr = "create table user(id integer,username text,password text)";  
void DBSqlite::createTable(std::string sql, std::string name)
{
	if (!existTable(name))
	{
		// ������������IDΪ���������Զ�����  
		int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
		if (SQLITE_OK != result)
		{
			CCLOG("������ʧ�ܣ�������:%d ������ԭ��:%s\n", result, m_pErrMsg);
		}
	}
}

// ɾ������  
// @ʾ�����string sqlstr = "drop table name";  
void DBSqlite::deleteTable(std::string sql, std::string name)
{
	if (existTable(name))
	{
		int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
		if (SQLITE_OK != result)
		{
			CCLOG("ɾ����ʧ�ܣ�������:%d ������ԭ��:%s\n", result, m_pErrMsg);
		}
	}
}

// ��������  
// @ʾ�����string sqlstr = " insert into MyTable_1( name ) values ( '������' ) ";  
void DBSqlite::insertData(std::string sql)
{
	int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
	if (SQLITE_OK != result)
	{
		CCLOG("�����¼ʧ�ܣ�������:%d ������ԭ��:%s\n", result, m_pErrMsg);
	}
}

// ɾ������  
// @ʾ�����string sqlstr = "delete from MyTable_1 where ID = 2";  
void DBSqlite::deleteData(std::string sql)
{
	int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
	if (SQLITE_OK != result)
	{
		CCLOG("ɾ����¼ʧ�ܣ�������:%d ������ԭ��:%s\n", result, m_pErrMsg);
	}
}

// �޸�����  
// @ʾ�����string sqlstr = "update MyTable_1 set name='������' where ID = 3"; 
void DBSqlite::updateData(std::string sql)
{
	int result = sqlite3_exec(m_pDBSqlite, sql.c_str(), NULL, NULL, &m_pErrMsg);
	if (SQLITE_OK != result)
	{
		CCLOG("�޸ļ�¼ʧ�ܣ�������:%d ������ԭ��:%s\n", result, m_pErrMsg);
	}
}

// getDataCount�Ļص�����  
int loadRecordCount(void * para, int n_column, char ** column_value, char ** column_name)
{
	int *count = (int*)para;
	*count = n_column;
	return 0;
}

// ��ȡ��¼������  
// @ʾ�����string sqlstr = "select count(*) from user";  
// @ʾ�����  ȡ�ñ����ֶε����string sqlstr = "select * from user";  
int DBSqlite::getDataCount(std::string sql)
{
	int count = 0;
	sqlite3_exec(m_pDBSqlite, sql.c_str(), loadRecordCount, &count, &m_pErrMsg);
	return count;
}

// getDataInfo�Ļص�����  
int loadRecord(void * para, int n_column, char ** column_value, char ** column_name)
{
	return 0;
}

// ��ȡһ����¼����Ϣ  
/*
*  �˷����ǲ�ѯ�������൱֮��Ҫ��pSender����Ǹ�vector
*/
void DBSqlite::getDataInfo(std::string sql, void* pSend)
{
	sqlite3_exec(m_pDBSqlite, sql.c_str(), loadRecord, pSend, &m_pErrMsg);
}

// �رմ򿪵����ݿ�  
void DBSqlite::disposeDB()
{
	sqlite3_close(m_pDBSqlite);
}