const express = require('express');

class SocialPostRouter {
    constructor(socialPostService) {
        this.socialPostService = socialPostService;
    }

    router() {
        let router = express.Router();
        //Social Post 

        //Adding a new Blog Post
        router.post('/:userID', (req, res) => {
            this .socialPostService.addSocialPost(req.body.header, req.body.body, req.body.header_image, req.session.passport.user_id, req.params.userID)
            .then(() => this.socialPostService.listSocialPost(req.params.userID))
            .then((social_post) => res.json(social_post))
            .catch((err) => rest.status(500).json(err));
        })

        //list all the blogs by special user
        router.get('/:userID', (req,res) => {
            this.socialPostService.listSocialPost(req.params.userID)
            .then((social_post) => res.json(social_post))
            .catch((err) => res.status(500).json(err));
        });

        //edit social post
        router.put('/:spostID', (req,res) => {
            this.socialPostService.editSocialPost(req.body.header, req.body.body, req.body.header_image, req.session.passport.user_id)
            .then((socialPostDetails) => res.json(socialPostDetails))
            .catch((err) => res.status(500).json(err));
        })

        //delete social post
        router.delete('/:spostID', (req, res) => {
            this.socialPostService.deleteSocialPost(req.params.userID)
            .then((social_post) => res.json(social_post))
            .catch((err) => res.status(500).json(err));
        })

        return router;
    }
}

module.exports = SocialPostRouter;