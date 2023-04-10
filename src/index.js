import express from 'express';
import { connect } from './config/database.js';
import bodyParser from 'body-parser';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js'
import { PORT } from './config/serverConfig.js';
const app = express();

import apiRoutes from './routes/index.js'; 

app.listen(PORT,async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(passport.initialize());
    passportAuth(passport);
    app.use('/api',apiRoutes);

    console.log('Server started');
    await connect();
    console.log('MongoDb started');

}); 