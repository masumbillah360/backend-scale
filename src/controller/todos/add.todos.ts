import { Request, Response } from 'express';

import * as todoRepository from '../../repository/index.js';
import { todoSchema } from '../../validation/todos/index.js';

import z from 'zod';

const addTodo = async (req: Request, res: Response) => {
    const {success, data, error} = todoSchema.safeParse(req.body);
    // const {success, data, error} = z.safeParse(todoSchema, req.body);

    if(error && !success) {
        return res.json({
            success: false,
            message: 'Validation error',
            errors: z.treeifyError(error).properties
        })
    }
    const todo = await todoRepository.addTodo(data);

    res.status(201).json({
        success: true,
        message: 'Todo created successfully',
        data: todo,
    });
};

export default addTodo;
