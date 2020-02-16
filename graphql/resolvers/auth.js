const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const {user,transformBookings} = require('./merge')
const jwt = require('jsonwebtoken')



module.exports = {




    bookEvent: async args =>{
        const fetchedEvent = await Event.findOne({_id: args.eventId});
        const booking = new Booking({
            user: '5ce1863ab1ef7935c822aa33',
            event: fetchedEvent,


        });
        const result = await booking.save();
        return transformBookings(result);

    },
    login: async ({email,password}) => {
        const user = await  User.findOne({email: email});
        if (!user){
            throw new Error(`This user doesn't Exist`)
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual){
            throw new Error(`Password is not correct`)
        }
        const token = await jwt.sign({userId: user.id, email: user.email}, 'somesupersecretkey', {
            expiresIn: '1h'
        });
        return {userId: user.id, token: token, tokenExpiration: 1};
    }
};
