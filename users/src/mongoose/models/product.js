import mongoose from 'mongoose';
import Review from './review';
import UnitMeasure from './unitMeasure';
import Category from './category';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    sku: {
        type: String,
        required: true
    },
    name: {
        type: Description,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortDesc: {
        type: Description,
        required: true
    },
    reviews: {
        type : [Review]
    },
    um: {
        type: UnitMeasure
    },
    category: Category,
    sellers: [{
        type: Schema.Types.ObjectId, ref: 'seller'
    }],
    createdBy: {
        type: Schema.Types.ObjectId, ref: 'seller'
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
const Product = mongoose.model('product', ProductSchema);
export default Product;