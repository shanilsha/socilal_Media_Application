import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js'

const app = express();

app.use('/posts',postRoutes);


app.use(bodyParser.json({  extended: true }));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://login:axsDGoFxLYdFy9qU@cluster0.zate4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const PORT = process.env.PORT || 9000;


mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
.then(()=> app.listen(PORT,()=> console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);

