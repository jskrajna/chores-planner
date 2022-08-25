import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    name: {type: String, required: true},
})

const User = mongoose.model('user', UserSchema);

export {User};
