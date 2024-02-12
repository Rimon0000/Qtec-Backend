import { z } from "zod";

const createTaskValidationSchema = z.object({
    body: z.object({
      title: z.string(),
      status: z.enum(['completed', 'incomplete']),
      priority: z.enum(['low', 'medium', 'high'])
    })
})

const updateTaskValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    status: z.enum(['completed', 'incomplete']).optional(),
    priority: z.enum(['low', 'medium', 'high']).optional()
  })
})


export const taskValidations = {
    createTaskValidationSchema,
    updateTaskValidationSchema
}