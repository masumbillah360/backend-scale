import app from './app';
import appConfig from './config/index';
import dbConnect from './db';

const PORT = appConfig.PORT;
app.listen(PORT, () => {
    console.log(`
        -------------------------------------------------------
                SERVER IS RUNNING ON ${PORT}
        -------------------------------------------------------
        URL: http://localhost:${PORT},
        HEALTH: http://localhost:${PORT}/health
        -------------------------------------------------------
`);
    dbConnect();
});
