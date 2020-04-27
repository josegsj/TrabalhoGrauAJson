use db2;
db.getCollection("movies").aggregate(
    [
        { 
            "$unwind" : "$genres"
        }, 
        { 
            "$group" : { 
                "_id" : "$genres.name", 
                "count" : { 
                    "$sum" : 1.0
                }
            }
        }, 
        { 
            "$sort" : { 
                "count" : -1.0
            }
        }
    ]
);