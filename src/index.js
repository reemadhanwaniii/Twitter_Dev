const express = require('express');
const connect = require('./config/database');

const app = express();

const TweetService  = require('./services/tweet-service');

app.listen(3000,async () => {
    console.log('Server started');
    await connect();
    let service = new TweetService();
    const tweet = await service.create({
        content: 'my #working twitter'
    });
    console.log(tweet);
}); 