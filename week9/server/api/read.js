module.exports = function(db, app){
    app.post("/api/read", function(req, res){
        console.log(req.body.request);
        console.log("Read");
        const collection = db.collection("products");
        collection.find({}).toArray((err, data) => {
            console.log(data);
            res.send(data);
        });
    });
} 