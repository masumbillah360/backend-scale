import express, { Application, Request, Response} from "express"
const app:Application = express();


app.get('/', (_req:Request, res:Response) => {
    res.json({
        success: true,
        message: 'OK',
    })
})

app.get('/health', (_req:Request, res:Response) => {
    return res.json({
        success: true,
        message: "Service is healthy"
    })
})

export default app;