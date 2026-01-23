import { Router } from "express";

import todoRouter from './todos'


const router = Router();

router.get('/route-health', (req, res) => {
    return res.json({
        success: true,
        message: 'Router Health OK!'
    })
})

router.use(todoRouter)

export default router;