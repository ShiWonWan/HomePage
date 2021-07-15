from decouple import config
import pymysql

def getConection():

    DATABASE_URL = config('DATABASE_URL')
    USER = config('USER')
    PASSWORD = config('PASSWORD')

    print(DATABASE_URL)
    print(USER)
    print(PASSWORD)

    return pymysql.connect(
        host = DATABASE_URL,
        user = USER,
        password = PASSWORD,
        db = 'home'
    )