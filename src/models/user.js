import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
        },
    },
    { timestamps: true },
);

userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
        userName: login,
    });
    if (user) {
        user = await this.findOne({ email: login })
    }
    return user;
};

// if user is deleted, all messages should be deleted too
// this is a pre hook to remove messages on user deletion
userSchema.pre('remove', function(next) {
    this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;