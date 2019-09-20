const auhtResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const contactResolver = require('./contact');


const rootResolver = {
    ...auhtResolver,
    ...eventsResolver,
    ...bookingResolver,
    ...contactResolver
}

module.exports = rootResolver;