import mongoose, {Schema} from "mongoose";
import  jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String, //cloudnary url
        required: true,
    },
    coverImage: {
        type: String, 
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video',
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    refreshToken: {
        type: String,
    }
},
{
    timestamps: true,
})

//pre hook :  using to encrypt the password justs before saving them in database
//cant use arrow function in pre hook callback becz they dont have this.constructor refference in them which is neccessary for the pre hook use async function with next reffernece
userSchema.pre("save", async function (next){
    //for flase
    if( !this.isModified("password") ) return next(); 
    //for true
    this.password = bcrypt.hash(this.password, 10)
    next();
})

userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)