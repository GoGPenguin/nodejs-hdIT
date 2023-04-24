import express from "express";
import homeController from '../controller/homeController'
import aboutController from '../controller/aboutController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/detail/user/:id', homeController.getDetailpage);

    router.post('/create-new-user', homeController.createNewUser);

    router.get('/about', aboutController.getAboutpage);

    return app.use('/', router)
}

// module.export = initWebRoute; 
export default initWebRoute;