const auhtResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const contactResolver = require('./contact');
const youtubeResolver = require('./youtubeLink');


const rootResolver = {
    ...auhtResolver,
    ...eventsResolver,
    ...bookingResolver,
    ...contactResolver,
    ...youtubeResolver
}

module.exports = rootResolver;