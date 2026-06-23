import Product from "../models/Product.js";

export const createProduct = (req, res) => {

    Product.create({
        ...req.body,
        storeId: req.storeId
    })

    .then((product) => {

        res.send({
            message: "Product Created",
            product
        });

    })

    .catch((err) => {

        res.send({
            error: err.message
        });

    });

};

export const getProducts = (req, res) => {

    Product.find({
        storeId: req.storeId
    })

    .then((products) => {

        res.send(products);

    })

    .catch((err) => {

        res.send({
            error: err.message
        });

    });

};


export const getSingleProduct = (req, res) => {

    Product.findOne({
        _id: req.params.id,
        storeId: req.storeId
    })

    .then((product) => {

        res.send(product);

    })

    .catch((err) => {

        res.send({
            error: err.message
        });

    });

};



export const updateProduct = (req, res) => {

    Product.findOneAndUpdate(
        {
            _id: req.params.id,
            storeId: req.storeId
        },
        req.body,
        {
            new: true
        }
    )

    .then((product) => {

        res.send({
            message: "Product Updated",
            product
        });

    })

    .catch((err) => {

        res.send({
            error: err.message
        });

    });

};


// DELETE

export const deleteProduct = (req, res) => {

    Product.findOneAndDelete({
        _id: req.params.id,
        storeId: req.storeId
    })

    .then((product) => {

        res.send({
            message: "Product Deleted",
            product
        });

    })

    .catch((err) => {

        res.send({
            error: err.message
        });

    });

};


// INVENTORY VALUATION

export const inventoryValuation = (req, res) => {

    Product.aggregate([

        {
            $match: {
                storeId: req.storeId
            }
        },

        {
            $group: {
                _id: null,

                totalInventoryValue: {

                    $sum: {
                        $multiply: [
                            "$quantity",
                            "$pricePerUnit"
                        ]
                    }

                }

            }
        }

    ])

    .then((result) => {

        res.send(result);

    })

    .catch((err) => {

        res.send({
            error: err.message
        });

    });

};