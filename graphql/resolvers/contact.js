import {transformContactsMessage} from "./merge";

const Contact = require('../../models/contact');

module.exports = {

    contactsMessages: async () =>{
        try {
            const contactMessages = await Contact.find();
            return contactMessages.map(contact => {
                return transformContactsMessage(contact);
            });
        }catch (e) {
            throw e;
        }
    },
    createContactMessage: async (args, req) => {

        if (!req.isAuth){
            console.log(`req = ${req.isAuth}`);
            throw new Error('Unauthentificated');
        }
        const contactMessage = new Event({
            nom: args.contactInput.nom,
            mail: args.contactInput.mail,
            message: args.contactInput.message,
            date: new Date(args.contactInput.date),

        });
        let createdContatcMessage;
        try {
            const result = await contactMessage.save();
            console.log(result);
            createdContatcMessage = transformContactsMessage(result);
            console.log(createdContatcMessage);
            return createdContatcMessage;
        }catch (e) {
            throw e;
        }

    },
};

