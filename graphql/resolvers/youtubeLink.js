
const YoutubeLink = require('../../models/youtubeLink');

module.exports = {

    youtubeLinks: async () =>{
        try {

            return  await YoutubeLink.find();

        }catch (e) {
            throw e;
        }
    },
    createYoutubeLink: async (args) => {

        const youtubeLink = new YoutubeLink({
            link: args.youtubeLinkInput.link
        });
        try {
            const result = await youtubeLink.save();
            return result;
        }catch (e) {
            throw e;
        }

    },
    cancelYoutubeLink: async (args, req) => {
        if (!req.isAuth){
            throw new Error('Unauthentificated');
        }
        try{
            const youtubeLink = await YoutubeLink.findById(args.youtubeLinkId);
            await YoutubeLink.deleteOne({_id: args.youtubeLinkId});
            return youtubeLink;
        }catch (e) {
            throw e;
        }
    }
};

