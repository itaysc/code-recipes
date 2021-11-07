import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DescriptionSchema = new Schema({
    langs: {
        type: Map,
        of: String
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
export default DescriptionSchema;