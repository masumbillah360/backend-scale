import { Request, Response } from 'express';

import * as todoRepository from '../../repository/index.js';

const getTodo = async (req: Request, res: Response) => {
   const { id } = req.params;
    const todo = await todoRepository.getTodo(id as string);

    if(!todo) {
        res.status(400).json({
            success: true,
            message: 'Todo not found',
            data: null,
        });

    }
    res.status(200).json({
        success: true,
        message: 'Todo found successfully',
        data: todo,
    });
};

export default getTodo;
