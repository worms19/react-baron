const { buildSchema } = require('graphql');


module.exports = buildSchema(`
        
        type Booking {
            _id: ID!
            event: Event!
            user: User!
            createdAt: String! 
            updatedAt: String!
        }
        
        type Contact {
            _id: ID!
           nom: String! 
           mail: String! 
           message: String!
           date: String!
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
  
        type YoutubeLink {
            _id: ID!
           link: String! 
          
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
        
        input ContactInput{
           nom: String! 
           mail: String! 
           message: String!
           date: String!
        }
        
        input YoutubeLinkInput{
           link: String! 
        }
        
        input UserInput{
            email: String!
            password: String!
        }
        
        type RootQuery {
            events: [Event!]!
            bookings: [Booking!]!
            contactsMessages: [Contact!]!
            youtubeLinks: [YoutubeLink!]!
            login(email:String!, password: String!): AuthData!
        }
        
        type RootMutation{
            createEvent(eventInput : EventInput): Event
            createContactMessage(contactInput : ContactInput): Contact
            createYoutubeLink(youtubeLinkInput : YoutubeLinkInput): YoutubeLink
            createUser(userInput : UserInput):User
            bookEvent(eventId: ID!): Booking!
            cancelBooking(bookingId: ID!): Event!
            cancelEvent(eventId: ID!): Event!
            cancelYoutubeLink(youtubeLinkId: ID!): YoutubeLink!
        }
        
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `);
