import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    group: { type: Schema.Types.ObjectId, ref: 'Group'},
    message: { type: String},
    media: {type: String, default: null},
    status: { type: String, enum: ['sent', 'delivered', 'read'], default: 'sent' },
    type: { type: String, enum: ['text', 'image', 'video', 'audio', 'document'], default: 'text' },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);