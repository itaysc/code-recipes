import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Address from './address';
const Schama = mongoose.Schema;

const StoreSchema = new Schama({
    name: {
        type: String,
        trim: true,
        required: true,
        index: true
    },
    businessNumber: {
        type: String,
        required: true
    },
    addresses: {
        type: [Address],
        required: true
    },
    phone: {
        type: String,
        unique: false,
        validate: {
            validator: function(v) {
              return /^[0-9]*$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: false
    },
    isChainStore: {
        type: Boolean,
        default: false
    },
    useDelivery: {
        type: Boolean,
        default: true 
    },
    isActive: {
        type: Boolean,
        trim: true,
        default: true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },
})

const User = mongoose.model('store', StoreSchema);
export default User;