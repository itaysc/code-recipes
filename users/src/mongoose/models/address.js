import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schama = mongoose.Schema;

const Address = new Schama({
    countryCode: {
        type: Number,
    },
    countryDesc: {
        type: String,
    },
    cityCode:{
        type: Number,
        required: true,
    },
    cityDesc: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    houseNumber: {
        type: String,
        required: true
    },
    apartmentNumber:{
        type: String,
    },
    floor:{
        type: Number
    },
    entry: {
        type: String
    },
    zipCode: {
        type: String
    }

})

export default Address;