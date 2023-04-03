const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const app = express();

app.listen(3000,async () => {
    console.log('Server started');
    await connect();
    // const tweet = await Tweet.create({
    //     content: 'dummy content',
    //     userEmail: 'dummy#du.com'
    // });
    //const tweet = await Tweet.find();
    // const tweet = await Tweet.find({
    //     userEmail: 'abc@admin.com'
    // });
    
    // const tweet = await Tweet.findById('642acd5845cb06332734e5d3');
    // tweet.userEmail = 'b@cd.com';
    // tweet.save();
    // console.log(typeof tweet);
});