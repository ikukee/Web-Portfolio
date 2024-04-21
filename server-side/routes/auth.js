import express from 'express'
import { deleteProject, postProject, updateProject } from '../controllers/project.js'
import { login, updateUser } from '../controllers/auth.js';
import { deleteMail, index } from '../controllers/mail.js';
const router = express.Router();
// USER
router.post("/auth/login", login);
router.patch("/auth/user/update",updateUser);

// MAILS
router.get("/mails/",index);
router.delete("/mails/delete", deleteMail);
// PROJECTS
router.patch("/projects/:id/update",updateProject);
router.delete("/projects/:id/delete", deleteProject);
router.post("/projects/post", postProject);

export default router;