import express from "express";
import homeController from '../controller/homeController'
import aboutController from '../controller/aboutController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/about', aboutController.getAboutpage);

    router.get('/detail/user/:id', homeController.getDetailpage);

    return app.use('/', router)
}

// module.export = initWebRoute; 
export default initWebRoute;