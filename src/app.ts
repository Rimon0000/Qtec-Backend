import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { taskRoutes } from './app/modules/TaskManagement/task.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/tasks", taskRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
