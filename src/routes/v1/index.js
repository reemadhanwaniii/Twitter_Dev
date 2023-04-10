import express from 'express';
import { createTweet,getTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signup } from '../../controllers/auth-controller.js';

const router = express.Router();

router.post('/tweet',createTweet);
router.post('/like/toggle',toggleLike);
router.post('/comment',createComment);
router.post('/signup',signup);
router.get('/tweet/:id',getTweet);

export default router;
