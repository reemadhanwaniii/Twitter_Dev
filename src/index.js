const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');

const app = express();

app.listen(3000,async () => {
    console.log('Server started');
    await connect();
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.update('642acd5845cb06332734e5d3',{content:' updating data with something new'});
    console.log(tweet);
}); 