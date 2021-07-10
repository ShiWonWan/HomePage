from flask import Flask, jsonify, request
from flask_cors import CORS
import dbController
import json

app = Flask(__name__)
CORS(app)

# TEST END POINT
@app.route('/')
def index():
    return jsonify({"message" : "Working OK!"})

# GET ALL BOOKMARKS
@app.route('/bookmarks', methods=['GET'])
def getBookmarks():
    return jsonify(dbController.getBookmarks())

# GET ONE BOOKMARK
@app.route('/bookmarks/<id>', methods=['GET'])
def getOneBookmark(id):
    return jsonify(dbController.getOneBookmark(id))

# ADD NEW BOOKMARK
@app.route('/bookmarks', methods=['POST'])
def newBookmark():
    dbController.insertBookmark(request.json["name"], request.json["url"])
    return jsonify({"status" : f"""{request.json["name"]} added ok"""})

# UPDATE ONE BOOKMARK
@app.route('/bookmarks/<id>', methods=['PUT'])
def updateBookmark(id):
    dbController.updateBookmark(id, request.json["name"], request.json["url"])
    return jsonify({"status" : "Updated successfully"})

# DELETE ONE BOOKMARk
@app.route('/bookmarks/<id>', methods=['DELETE'])
def deleteBookmark(id):
    dbController.deleteBookmark(id)
    return jsonify({"status" : "Deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)