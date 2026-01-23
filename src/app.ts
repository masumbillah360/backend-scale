import express, { Application, Request, Response} from "express"
import appRouter from "./routes";
const app:Application = express();

app.use(express.json())
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

app.use(appRouter);

export default app;