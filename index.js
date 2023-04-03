import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);



const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL)
.then(() => app.listen(PORT, ()=> console.log(`Server is up and running on port: ${PORT}`)) )
.catch((error) => console.log(error.message) );