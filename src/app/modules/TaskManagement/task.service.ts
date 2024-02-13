import { TTask } from "./task.interface";
import { Task } from "./task.model";


//create
const createTaskFromDb = async(payload: TTask) =>{
    const result = await Task.create(payload)
    return result;
}

//get
const getAllTaskFromDb = async() =>{
    const result = await Task.find()
    return result;
}

//get single Task
const getSingleTaskFromDb= async (id: string) => {
    const result = await Task.findById(id);
    return result;
  };

//update
const updateTaskFromDb = async(id: string, payload: TTask) =>{
    const result = await Task.findByIdAndUpdate(id, payload, {new: true, runValidators: true})
    return result;
}

//delete
const deleteTaskFromDb = async (id: string) => {
    const result = await Task.findByIdAndDelete(id);
    return result;
};

//make status complete
const makeStatusCompleteFromDb = async(id:string) =>{
    const result = await Task.findByIdAndUpdate(id, {status: "completed"}, {new: true})
    return result;
}


export const taskServices = {
    createTaskFromDb,
    getAllTaskFromDb,
    getSingleTaskFromDb,
    updateTaskFromDb,
    deleteTaskFromDb,
    makeStatusCompleteFromDb
}