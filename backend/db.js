const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password_hash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

// Method to generate a hash from plain text 
userSchema.statics.createHash = async function (plainTextPassword) {
  // Hashing user's salt and password with 10 iterations,
  const saltRounds = 10;
  // First method to generate a salt and then create hash 
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainTextPassword, salt);
};

userSchema.methods.validatePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password_hash);
};

const User = mongoose.model('User', userSchema);

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: 'User',
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = { User, Account };
