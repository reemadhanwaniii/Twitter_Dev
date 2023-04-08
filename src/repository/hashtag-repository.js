import Hashtag from '../models/hashtag.js';

class HashtagRepository {
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch(error) {
            throw error;
        }
    }
    async destroy(id) {
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            throw error;
        }
    } 
    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
        } catch (error) {
            throw error;
        }
    }
    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            throw error;
        }
    }
}

export default HashtagRepository;