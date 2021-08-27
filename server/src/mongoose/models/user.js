import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schama = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const UserSchema = new Schama({
    userName: {
        type: String,
        trim: true,
        required: true,
        index: true
      },
    firstName: {
        type: String,
        min: [2, 'First name should be at least 2 characters long'],
        required: false
    },
    lastName: {
        type: String,
        min: [2, 'Last name should be at least 2 characters long'],
        required: false
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
        validate: {
            validator: function(v) {
              return emailRegex.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
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
    password: {
        type: String,
        trim: true,
        min: [8, 'Password should be at least 8 characters long'],
        required: true
    },
    isActive: {
        type: Boolean,
        trim: true,
        default: true
    },
    recipes:[{ 
        type : mongoose.ObjectId, 
        ref: 'User',
        default: []
    }],
    
    gender: {
        type: String,
        trim: true,
        default: null
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },
})

// Virtual properties
UserSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

// static funcrtions
UserSchema.statics.findByEmail = function(email) {
    return this.find({ email });
};

// hooks
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// UserSchema.pre('remove', function(next){
//     //const Post = mongoose.model('Post'); // use this to avoid curcular imports
// })

// schema methods
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('user', UserSchema);
export default User;