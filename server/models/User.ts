import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            min: 3,
            max: 100,
            lowercase: true,
            validate: {
                validator: (v: string) =>
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
                message: (props: any) =>
                    `${props.value} is not a valid email address`,
            },
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 20,
        },
        username: {
            type: String,
            default: '',
            min: 3,
            max: 15,
            unique: true,
        },
        name: {
            first: String,
            last: String,
        },
        profilePicture: {
            type: String,
            default: '',
        },
        todos: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
