
import os
import xlrd
import sqlite3

src_path = os.getcwd()

def read_sheet(sheet):
    # 判断有效sheet
    if sheet.nrows > 0 and sheet.ncols > 0:
        for row in range(0, sheet.nrows):
            row_data = [];
            table_name = '';
            index = 0;
            for col in range(sheet.ncols):
                data = sheet.cell(row, col).value
                # excel表格内容数据类型转换 float->int，unicode->utf-8
                if type(data) is str:
                    data = data.encode("utf-8");
                    if 0 == index:
                        if len(data) > 0:
                            byte = data[0];
                            if (byte >= 65 and byte <= 90) or (byte >= 97 and byte <= 122):
                                table_name = chr(byte);
                            else:
                                break;
                index = index + 1;
                row_data.append(data);
                if 6 == index:
                    break;
            # 插入数据库
            if len(table_name) > 0:
                insert_sqlite3(row_data, table_name);

def read_xlsx_file():
    xlsx_path = os.path.join(src_path, "xls\\word.xlsx");
    xlsx_data = xlrd.open_workbook(xlsx_path);

    for sheet in xlsx_data.sheets():
        read_sheet(sheet);

def insert_sqlite3(row_data, table_name):
    try:
        cur.execute("create table if not exists %s(word text, notes text, phonogram text, detail text, luke text, link text)" % table_name);
        db.commit();
        cur.execute("insert into %s values(?,?,?,?,?,?)" % table_name, row_data);
        db.commit();
    except sqlite3.Error as err:
        print("Word = %s, Error Occurred: %s" % row_data[0], err.args[0]);

if __name__ == '__main__':
    db_path = os.path.join(src_path, "..\\project\\assets\\resources\\data\\db\\luke.db");
    print(db_path);
    
    db = sqlite3.connect(db_path);
    cur = db.cursor();

    for i in range(97, 123):
        cur.execute("drop table if exists %s" % chr(i));
    db.commit();
    
    read_xlsx_file();

    cur.close();
 
