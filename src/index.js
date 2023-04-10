import express from 'express';
import { connect } from './config/database.js';
import bodyParser from 'body-parser';

import { PORT } from './config/serverConfig.js';
const app = express();

import apiRoutes from './routes/index.js';

import {UserRepository,TweetRepository} from './repository/index.js';
import LikeService from './services/like-service.js';
 

app.listen(PORT,async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',apiRoutes);

    console.log('Server started');
    await connect();
    console.log('MongoDb started');

}); 