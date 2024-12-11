import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";
const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        required: true,
        default:true,
    },
    role:{
        type: String,
        required: true,
        enum:['admin','student','faculty']
    },
    status:{
        type: String,
        required: true,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress',
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true,
})

userSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );
    next();
})

userSchema.post('save', async function (doc,next) { 
    doc.password = '';
    next();
})

export const User = model<IUser>('User', userSchema);