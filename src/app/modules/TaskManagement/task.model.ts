import { Schema, model } from 'mongoose';
import { TTask } from './task.interface';

const taskSchema = new Schema<TTask>({
  title: { type: String, required: true },
  status: { type: String, enum: ['completed', 'incomplete'], required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], required: true }
});

export const Task = model<TTask>('Task', taskSchema);
