module.exports = function(db, app, ObjectID){
    app.post("/api/update", function(req, res){
        if (!req.body){
            return res.sendStatus(400);
        }
        console.log("update");
        product = req.body;
        var objectid = new ObjectID(product._id);
        const collection = db.collection("products");
        collection.updateOne({_id:objectid}, {$set: {name: product.name, description: product.description, price: product.price, units: product.units}}, ()=>{
            collection.find({}).toArray((err, data)=>{
                res.send({data});
            })
        });
    });
}