import { Request, Response } from "express";
import { taskServices } from "./task.service";

const createTask = async(req: Request, res: Response) =>{
    const result = await taskServices.createTaskFromDb(req.body)
    res.status(200).json({
        success: true,
        message: "Task is created successfully",
        data: result
    })
}

//get single
const getSingleTask = async(req: Request, res: Response) =>{
    const id = req.params.id
    const result = await taskServices.getSingleTaskFromDb(id)
    res.status(200).json({
        success: true,
        message: "Task is retrieved successfully",
        data: result
    })
}

const getAllTask = async(req: Request, res: Response) =>{
    const result = await taskServices.getAllTaskFromDb()
    res.status(200).json({
        success: true,
        message: "Task are retrieved successfully",
        data: result
    })
}

//update
const updateTask = async(req: Request, res: Response) =>{
    const id = req.params.id
    const result = await taskServices.updateTaskFromDb(id, req.body)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Task updated successfully",
        data: result
    })
}

//make status complete
const makeStatusComplete = async(req: Request, res: Response) =>{
    const id = req.params.id
    const result = await taskServices.makeStatusCompleteFromDb(id)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Status Completed successfully",
        data: result
    })
}


//delete
const deleteTask = async(req: Request, res: Response) =>{
    const id = req.params.id
    const result = await taskServices.deleteTaskFromDb(id)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Task deleted successfully",
        data: result
    })
}

export const taskControllers = {
    createTask,
    getAllTask,
    updateTask,
    deleteTask,
    getSingleTask,
    makeStatusComplete
}