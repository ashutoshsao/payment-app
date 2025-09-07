// schemas/user.js
const { z } = require("zod");

const baseUserSchema = z.object({
    username: z.string().email(),
    password: z.string().min(3),
    firstName: z.string(),
    lastName: z.string()
});

// Signup needs everything
const signupSchema = baseUserSchema;

// Signin only needs a subset
const signinSchema = baseUserSchema.pick({
    username: true,
    password: true
});

module.exports = {
    signupSchema,
    signinSchema
};
