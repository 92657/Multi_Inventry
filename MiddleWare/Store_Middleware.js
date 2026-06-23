const storeMiddleware = (req, res, next) => {

    const storeId = req.headers["x-store-id"];

    if(!storeId){
        return res.send("Store ID Missing");
    }

    req.storeId = storeId;

    next();
};

export default storeMiddleware;