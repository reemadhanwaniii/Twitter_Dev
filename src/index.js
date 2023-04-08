const express = require('express');
const connect = require('./config/database');

const app = express();

const { HashtagRepository} = require('./repository/index');

app.listen(3000,async () => {
    console.log('Server started');
    await connect();
    // let repo = new HashtagRepository();
    // await repo.bulkCreate([
    //     {
    //         title: 'Trend',
    //         tweets: []
    //     },
    //     {
    //         title: 'Excited',
    //         tweets: []
    //     },
    //     {
    //         title: 'python',
    //         tweets: []
    //     },
    //     {
    //         title: 'fun',
    //         tweets: []
    //     },
    //     {
    //         title: 'Career',
    //         tweets: []
    //     }
    // ]);

    // let repo = new HashtagRepository();
    // const tweets = await repo.findByName(['trend','Career','python','tweets','reema']);
    // console.log(tweets);
}); 