const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');

const app = express();

app.listen(3000,async () => {
    console.log('Server started');
    await connect();
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({
        content: 'Hey! how are you?'
    });
    tweet.comments.push({content: 'I am good'});
    await tweet.save();
    console.log(tweet);
}); 