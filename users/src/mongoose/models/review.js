import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    score: {
        type: Number,
        min: 1,
        max: 5,
        integer: true,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    },
    isAnonymous: {
        type: Boolean,
        default: false
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },

})

export default ReviewSchema;