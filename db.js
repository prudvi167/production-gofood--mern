const mongoose = require("mongoose");



const mongoDB=async function (url) {
    try {
        await mongoose.connect(url, { useNewUrlParser: true });

        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("food_items");
        const data = await foodCollection.find({}).toArray();
        global.food_items=data;

        const foodCategory = mongoose.connection.db.collection("foodCategory");
        const Catdata = await foodCategory.find({}).toArray();
        global.foodCategory=Catdata;

        // return { data, Catdata };
    } catch (err) {
        console.error("---" + err);
        throw err; // You can re-throw the error to handle it outside this function if necessary.
    }
};

module.exports=mongoDB;