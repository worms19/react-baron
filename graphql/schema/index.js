const { buildSchema } = require('graphql');


module.exports = buildSchema(`
        
        type Booking {
            _id: ID!
            event: Event!
            user: User!
            createdAt: String! 
            updatedAt: String!
        }
        
        type Event {
          _id: ID!
          barName: String!
          eventName: String!
          fbLink:  String
          date:  String!
        }
        
        type User {
            _id: ID!
            email: String!
            password: String
        }
        
        type AuthData {
            userId: ID!
            token: String!
            tokenExpiration: Int!
        }
           
        input EventInput {
           barName: String! 
           eventName: String! 
           fbLink: String!
           date: String!
        }
        
        input ContactInput {
           nom: String! 
           mail: String! 
           message: String!
           date: String!
        }
        
        input UserInput{
            email: String!
            password: String!
        }
        
        type RootQuery {
            events: [Event!]!
            bookings: [Booking!]!
            contactsMessages: [Contact!]!
            login(email:String!, password: String!): AuthData!
        }
        
        type RootMutation{
            createEvent(eventInput : EventInput): Event
            createContactMessage(contactInput : ContactInput): Contact
            createUser(userInput : UserInput):User
            bookEvent(eventId: ID!): Booking!
            cancelBooking(bookingId: ID!): Event!
            cancelEvent(eventId: ID!): Event!
        }
        
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `);
