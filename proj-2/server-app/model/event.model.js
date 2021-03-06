const mongoose = require("mongoose");
const shortid = require("shortid");
const eventModel = mongoose.Schema({
    eventId: {
        type: String,
        unique: true,
        required: true,
        default: shortid.generate()
    },
    type: {
        type: String,
    },
    title: {
        type: String,
    },
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    location: {
        type: String
    },
    attenders: {
        type: Array
    },
    description: {
        type: String
    },
    creator: {
        type: String
    },
    creatorId: {
        type: String
    }
})

eventModel.set('autoIndex');
const Event = mongoose.model('Event', eventModel);
module.exports = Event;
