import { Router } from "express";
import { createusuario, login} from "../controllers/task.controllers.js"
import {getAlldistritos,getAllregion,getAlleducativo,getAllestado,getAllmotivo} from "../controllers/cliente.controller.js"
const router=Router();

router.post('/registrousuario',createusuario)
router.post('/registrousuario1',login)
router.get('/distrito',getAlldistritos)
router.get('/region',getAllregion)
router.get('/motivo',getAllmotivo)
router.get('/estado',getAllestado)
router.get('/educativo',getAlleducativo)

export default router;