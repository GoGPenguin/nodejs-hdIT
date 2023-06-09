import express from "express";
import homeController from '../controller/homeController'
import aboutController from '../controller/aboutController'
import multer from "multer";
import path from "path";
var appRoot = require('app-root-path')
let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/img/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailpage);
    router.post('/create-new-user', homeController.createNewUser);

    router.post('/delete-user', homeController.deleteUser);
    router.get('/update-user/:id', homeController.updateUser);
    router.post('/edit-user', homeController.editUser);

    router.get('/upload', aboutController.getAboutpage);
    router.post('/upload-profile-pic', upload.single('profile_pic'), aboutController.handleUpload)

    return app.use('/', router)
}

// module.export = initWebRoute; 
export default initWebRoute;

