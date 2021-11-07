import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BoxShapeSchema = new Schema({
    um: {
        type: String,
        enum: ['cm', 'm', 'mm', 'inch', 'foot', ],
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

const UnitMeasuresSchema = new Schema({
    weight: {
        um: {
            type: String,
            enum: ['kg', 'g', 'mg', 'lbs', 'ton', ],
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    },
    boxShape: {
        height: BoxShapeSchema,
        length: BoxShapeSchema,
        depth:  BoxShapeSchema
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

export default UnitMeasuresSchema;