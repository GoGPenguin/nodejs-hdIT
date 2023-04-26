import express from "express";
import homeController from '../controller/homeController'
import aboutController from '../controller/aboutController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/detail/user/:id', homeController.getDetailpage);

    router.post('/create-new-user', homeController.createNewUser);

    router.get('/about', aboutController.getAboutpage);

    router.post('/delete-user', homeController.deleteUser);

    router.get('/update-user/:id', homeController.updateUser); 

    router.post('/edit-user', homeController.editUser);

    return app.use('/', router)
}

// module.export = initWebRoute; 
export default initWebRoute;