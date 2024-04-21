import express from 'express'
import { getProject, index } from '../controllers/project.js';
import { postMail } from '../controllers/mail.js';
const router = express.Router();

// -- public
router.get("/projects/",index);
router.get("/projects/:id", getProject);
router.post("/mails/post", postMail);

export default router;