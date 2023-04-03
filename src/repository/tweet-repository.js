const Tweet = require('../models/tweet');

class TweetRepository {
    async create(data) {
        try {
            const tweet = Tweet.create(data);
            return tweet;
        } catch(error) {
            throw error;
        }
    }
    async update(id,data) {
        try {
            const tweet = Tweet.findByIdAndUpdate(id,data,{new: true});
            return tweet;
        } catch(error) {
            throw error;
        }
    }
    async destroy(id) {
        try {
            const tweet = Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            throw error;
        }
    }
    async get(id) {
        try {
            const tweet = Tweet.findById(id);
            return tweet;
        } catch (error) {
            throw error;
        }
    } 
}

module.exports = TweetRepository;