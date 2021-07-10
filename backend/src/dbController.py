from db import getConection

def insertBookmark(name, url):
    connection = getConection()
    with connection.cursor() as cursor:
        cursor.execute(f"INSERT INTO home.bookmarks (`name`, `urlString`) VALUES  ('{name}', '{url}')")
    connection.commit()
    connection.close()

def getBookmarks():
    connection = getConection()
    reponse = []
    bookmarks = []
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM home.bookmarks")
        reponse = cursor.fetchall()
    connection.close()
    for doc in reponse:
        bookmarks.append({
            'id' : doc[0],
            'name' : doc[1],
            'url' : doc[2]
        })
    return bookmarks

def getOneBookmark(id):
    connection = getConection()
    reponse = []
    bookmarks = []
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT * FROM home.bookmarks WHERE id_bookmarks = {id}")
        reponse = cursor.fetchall()
    connection.close()
    for doc in reponse:
        bookmarks.append({
            'id' : doc[0],
            'name' : doc[1],
            'url' : doc[2]
        })
    return bookmarks

def deleteBookmark(id):
    connection = getConection()
    with connection.cursor() as cursor:
        cursor.execute(f"DELETE FROM home.bookmarks WHERE id_bookmarks = {id}")
    connection.commit()
    connection.close()

def updateBookmark(id, name, url):
    connection = getConection()
    with connection.cursor() as cursor:
        cursor.execute(f"UPDATE home.bookmarks SET name = \"{name}\", urlString = \"{url}\" WHERE id_bookmarks = {id};")
    connection.commit()
    connection.close()