import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { taskValidations } from "./task.validation";
import { taskControllers } from "./task.controller";


const router = express.Router()

//route will call controller function
router.post('/',validateRequest(taskValidations.createTaskValidationSchema), taskControllers.createTask)
router.get('/:id', taskControllers.getSingleTask)
router.get('/', taskControllers.getAllTask)
router.patch('/update-task/:id', validateRequest(taskValidations.updateTaskValidationSchema), taskControllers.updateTask)
router.delete('/:id', taskControllers.deleteTask)
//make admin
router.patch('/status-complete/:id', taskControllers.makeStatusComplete)




export const taskRoutes = router;