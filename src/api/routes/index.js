const { Router, urlencoded, json } = require('express');
const cors = require('cors');
const compression = require('compression');

module.exports = function ({ UserRoutes }) {
    const router = Router();
    const apiRoute = Router();

    apiRoute.use(cors())
        .use(urlencoded({ extended: true }))
        .use(json())
        .use("/user", UserRoutes)
        .use(compression());

    router.use("/api", apiRoute);
    return router;
}