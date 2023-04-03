const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app = express();

app.listen(3000,async () => {
    console.log('Server started');
    await connect();
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getAll(0,4);
    // console.log(tweet[0]._id);
    // console.log(tweet[0].id);
    console.log(tweet[0].contentWithEmail);
}); 