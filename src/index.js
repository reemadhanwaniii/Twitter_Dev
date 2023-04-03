const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app = express();

app.listen(3000,async () => {
    console.log('Server started');
    await connect();
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({
    //     content: 'Coding is an Art',
    //     userEmail: 'testing@edu.com'
    // });
    // const comment = await Comment.create({content : 'I love coding'});
    // tweet.comments.push(comment);
    // await tweet.save();
    const tweet = await tweetRepo.get('642af228b8d6d1a16ec9a225');
    console.log(tweet);
}); 