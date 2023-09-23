import express from 'express'
import Connection from './Database/db.js';
import cors from 'cors'
import Routes from './Routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'
import { options } from './config.js';

const app = express();
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true , limit: "100mb"}))
app.use(bodyParser.json())

const swaggerdoc = swaggerJSDoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerdoc));
app.use(cookieParser(
    
));


app.use('/',Routes);

const PORT= 8000;




Connection();

app.listen(PORT,()=>console.log(`server is running at ${PORT}`))