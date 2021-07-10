import pymysql

def getConection():
    return pymysql.connect(
        host = 'localhost',
        user = 'emmanuel',
        password = '895621',
        db = 'home'
    )