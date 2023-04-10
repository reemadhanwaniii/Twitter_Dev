import { CommentRepository,TweetRepository} from '../repository/index.js';

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }
    async createComment(modelId,modelType,userId,content) {
        try {
            if(modelType == 'Comment') {
                var commentable = await this.commentRepository.get(modelId);
            }else if(modelType == 'Tweet') {
                var commentable = await this.tweetRepository.get(modelId);
            }else {
                throw new Error('Unknown model Type');
            }
            const comment = await this.commentRepository.create({
                content: content,
                userId: userId,
                onModel: modelType,
                commentable: modelId,
                comments: []
            });
            commentable.comments.push(comment);
            await commentable.save();
            return comment;
        } catch (error) {
            console.log('Something went wrong in Comment Service');
            throw error;
        }
    }
}

export default CommentService;