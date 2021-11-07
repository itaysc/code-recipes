import mongoose from 'mongoose';
import Review from './review';
import Address from './address';
const Schama = mongoose.Schema;

const SellerSchema = new Schama({
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
    phones: [{
        type: String,
        unique: false,
        validate: {
            validator: function(v) {
              return /^[0-9]*$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: false
    }],
    isChainStore: {
        type: Boolean,
        default: false
    },
    useDelivery: {
        type: Boolean,
        default: true 
    },
    reviews: {
        type: [Review]
    },
    score: {
        type: Number,
        min: 1,
        max: 5,
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

const Seller = mongoose.model('seller', SellerSchema);
export default Seller;