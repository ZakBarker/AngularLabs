module.exports = function(db, app, ObjectID){
    
    app.post('/api/item',function(req,res){
        if (!req.body) {
         return res.sendStatus(400)
        }
        console.log("item");

        productID = req.body.id;
        var objectid = new ObjectID(productID);
        console.log(productID);
        const collection = db.collection('products');

        collection.find({_id:objectid}).limit(1).toArray((err,data)=>{
            console.log(data);
              res.send(data);
            })
         
        })
    
    }