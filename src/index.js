const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app = express();

app.listen(3000,async () => {
    console.log('Server started');
    await connect();
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getAll(5,5);
    console.log(tweet);
}); 