import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository {

    constructor() {
        super(Tweet);
    }
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch(error) {
            console.log('Something went wrong in repository layer');
            throw error;
        }
    }
    async update(id,data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(id,data,{new: true});
            return tweet;
        } catch(error) {
            console.log('Something went wrong in repository layer');
            throw error;
        }
    }
    async getAll(offset,limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw error;
        }
    }
    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw error;
        }
    }
}

export default TweetRepository;