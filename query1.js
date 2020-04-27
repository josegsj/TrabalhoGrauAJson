use db2;
db.getCollection("movies").find({}, 
    { 
        "_id" : 1.0, 
        "original_title" : 1.0, 
        "popularity" : 1.0
    }
).sort(
    { 
        "popularity" : -1.0
    }
).limit(10);