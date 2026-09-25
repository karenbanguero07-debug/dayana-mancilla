import { Router } from "express";
import { listMaterias, getMaterias, createMateria } from "../controllers/materias.controller.js";
const router = Router()

router.get("/", listMaterias);
router.get("/:id" , getMaterias);
router.post("/", createMateria);


export default router;
