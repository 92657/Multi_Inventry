import mongoose from "mongoose";
import AuditLog from "./AuditLog.js";

const productSchema = new mongoose.Schema({

    storeId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    pricePerUnit: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

productSchema.index({
    storeId: 1,
    category: 1
});


// CREATE LOG

productSchema.post("save", function(doc) {

    AuditLog.create({
        action: "CREATE",
        productId: doc._id,
        storeId: doc.storeId,
        changeDetails: doc
    })

    .then(() => {
        console.log("Create Log Saved");
    })

    .catch((err) => {
        console.log(err);
    });

});


// UPDATE LOG

productSchema.post("findOneAndUpdate", function(doc) {

    if(doc){

        AuditLog.create({
            action: "UPDATE",
            productId: doc._id,
            storeId: doc.storeId,
            changeDetails: doc
        })

        .then(() => {
            console.log("Update Log Saved");
        })

        .catch((err) => {
            console.log(err);
        });

    }

});


// DELETE LOG

productSchema.post("findOneAndDelete", function(doc) {

    if(doc){

        AuditLog.create({
            action: "DELETE",
            productId: doc._id,
            storeId: doc.storeId,
            changeDetails: doc
        })

        .then(() => {
            console.log("Delete Log Saved");
        })

        .catch((err) => {
            console.log(err);
        });

    }

});

const Product = mongoose.model("Product", productSchema);

export default Product;