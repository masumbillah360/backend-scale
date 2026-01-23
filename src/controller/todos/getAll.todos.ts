import { Request, Response } from 'express';

import * as todoRepository from '../../repository/index.js';
import { todoQueryParamsSchema } from '../../validation/todos/index.js';
import z from 'zod';

const getAllTodos = async (req: Request, res: Response) => {
    const { success, data, error } = todoQueryParamsSchema.safeParse(req.query);
    if (error || !success) {
        return res.status(400).json({
            success: false,
            message: 'Query validation failed',
            errors: {
                messages: z.treeifyError(error),
            },
        });
    }
    let { limit, page, search, orderBy, orderByKey } = data;
    limit = limit || 10;
    page = page || 1;
    search = search || '';
    const todo = await todoRepository.getAllTodos({
        limit: limit,
        search: search || '',
        offset: page * limit,
        orderBy,
        orderByKey,
    });

    if (!todo) {
        return res.status(400).json({
            success: true,
            message: 'Todo not found',
            data: null,
        });
    }
    return res.status(200).json({
        success: true,
        message: 'Todo found successfully',
        data: todo,
    });
};

export default getAllTodos;
