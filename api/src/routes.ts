import { Router } from 'express';
import { SendEmailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import { AnswerController } from './controllers/AnswerController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

const sendMailController = new SendEmailController();

const answerController = new AnswerController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answerController.execute);

export { router };