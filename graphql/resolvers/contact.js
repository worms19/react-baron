const Contact = require('../../models/contact');

module.exports = {

    contactsMessages: async () =>{
        try {

            return  await Contact.find();

        }catch (e) {
            throw e;
        }
    },
    createContactMessage: async (args, req) => {
        const contactMessage = new Contact({
            nom: args.contactInput.nom,
            mail: args.contactInput.mail,
            message: args.contactInput.message,
            phone: args.contactInput.phone,
            date: args.contactInput.date,
        });
        try {
            const result = await contactMessage.save();
            return result;
        }catch (e) {
            throw e;
        }
    },
    cancelMessage: async (args, req) => {
        if (!req.isAuth){
            throw new Error('Unauthentificated');
        }
        try{
            const message = await Contact.findById(args.messageId);
            await Contact.deleteOne({_id: args.messageId});
            return message;
        }catch (e) {
            throw e;
        }
    }
};

