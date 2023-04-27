import express from "express";
import APIController from '../controller/APIController'

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers); //method GET -> READ data

    router.post('/create-user', APIController.createNew) //method POST -> CREATE data

    router.delete('/delete-user/:id', APIController.deleteUser) //method PUT -> DELETE data

    router.put('/update-user', APIController.updateUser) //method DELETE -> UPDATE data


    return app.use('/api/v1/', router)
}

// module.export = initWebRoute; 
export default initAPIRoute;