module.exports = function(db, app, ObjectID){
    app.post("/api/remove", function(req, res){
        if (!req.body){
            return res.sendStatus(400);
        }
        console.log("remove");
        console.log(req.body);
        productID = req.body._id;
        console.log(productID);

        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        collection.deleteOne({_id: objectid}, (err, docs)=>{
            collection.find({}).toArray((err, data)=>{
                res.send(data);
            });
        });
    });
}