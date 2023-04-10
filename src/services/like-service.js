import { LikeRepository,TweetRepository } from "../repository/index.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }
    async toggleLike(modelId,modelType,userId) {
        //api/v1/toggle?id = modelid & type = Tweet

        if(modelType == 'Tweet') {
            var likeable = await this.tweetRepository.find(modelId);
        } else if(modelType == 'Comment') {
            //Todo
        } else {
            throw new Error('Unknown model type');
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        if(exists) {
            //console.log(exists);
            likeable.likes.pull(exists.id);
            await likeable.save();
            await this.likeRepository.remove(exists);
            var isRemoved = true;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isRemoved = false;
        }
        return isRemoved;
    }
}

export default LikeService;