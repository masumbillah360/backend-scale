import { Request, Response } from 'express';

import * as todoRepository from '../../repository/index.js';

import z from 'zod';
import { updateTodoSchema } from '../../validation/todos/index.js';

const updateTodo = async (req: Request, res: Response) => {
    const { success, data, error } = updateTodoSchema.safeParse(req.body);

    if(error && !success) {
        return res.json({
            success: false,
            message: 'Validation error',
            errors: {
                messages: z.treeifyError(error)
            }
        })
    }
    const todo = await todoRepository.updateTodo(data);

    res.status(200).json({
        success: true,
        message: 'Todo updated successfully',
        data: todo,
    });
};

export default updateTodo;
