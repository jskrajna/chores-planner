import mongoose from 'mongoose';
import { User } from './user.js'
const Schema = mongoose.Schema;

const ChoreSchema = new Schema ({
    name: { type: String, required: true },
    category: {type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

const Chore = mongoose.model('chore', ChoreSchema);

export { Chore };