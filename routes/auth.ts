import * as userController from '../controllers/auth';

Router.post('/login', userController.loginOne);
Router.post('/register', userController.registerOne);