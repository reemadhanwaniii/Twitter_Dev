import express from 'express';
import { createTweet,getTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signup } from '../../controllers/auth-controller.js';
import { login } from '../../controllers/auth-controller.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router = express.Router();

router.post('/tweet',authenticate,createTweet);
router.post('/like/toggle',toggleLike);
router.post('/comment',authenticate,createComment);
router.post('/signup',signup);
router.post('/login',login);
router.get('/tweet/:id',getTweet);

export default router;
