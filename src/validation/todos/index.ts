import { z } from 'zod';

const stringValidationSchema = (title: string) => {
    return z
        .string()
        .trim()
        .min(1, `${title} is required`)
        .max(100, `${title} max char should be 100`);
};

export const todoSchema = z.object({
    id: stringValidationSchema('id'),
    title: stringValidationSchema('title'),
    isCompleted: z.boolean().optional().nullable().default(false),
});

export const updateTodoSchema = todoSchema.optional()
export const todoQueryParamsSchema = z.object({
    limit: z
        .union([z.string(), z.number()])
        .transform((v) => {
            try {
                return Number(v);
            } catch (error) {
                throw new Error('Limit should be a valid number');
            }
        })
        .optional()
        .nullable()
        .default(100),
    page: z
        .union([z.string(), z.number()])
        .transform((v) => {
            try {
                return Number(v);
            } catch (error) {
                throw new Error('Page should be a valid number');
            }
        })
        .optional()
        .nullable()
        .default(1),
    search: z.string().optional().nullable(),
    orderBy: z.enum(['ASC', 'DESC']).optional().default('DESC'),
    orderByKey: z.string().optional().nullable(),
});

export type Todo = z.infer<typeof todoSchema>;
export type UpdateTodo = z.infer<typeof updateTodoSchema>;
