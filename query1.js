use db2;
db.getCollection("movies").find({}, 
    { 
        _id : 1, 
        original_title : 1, 
        popularity : 1
    }
).sort(
    { 
        popularity : -1
    }
).limit(10);