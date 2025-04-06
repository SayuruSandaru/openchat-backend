import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    telephone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    profilePicture: { type: String, default: null },
    status: { type: String, default: 'offline' },
    lastSeen: { type: Date, default: Date.now },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;