import mongoose from 'mongoose';
import Description from './description';
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: Description,
        require: true
    },
    subCats: [{
        type: Schema.Types.ObjectId, 
        ref: 'category',
    }],
    isMainCat: {
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
const Category = mongoose.model('category', CategorySchema);
export default Category;