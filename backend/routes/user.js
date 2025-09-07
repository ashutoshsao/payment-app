const { Router } = require("express");
const jwt = require("jasonwebtoken");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const { signupSchema, signinSchema } = require("../types");
const { authMiddleware } = require("../middleware");
const router = Router();
const z = require('zod');

router.post("/signup", async (req, res) => {

    const body = req.body;
    const { success } = signupSchema.safeParse(body);

    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne(
        { username: body.username }
    );

    if (existingUser._id) {
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const password_hash = await user.createHash(body.password);

    const user = await User.create({
        username: body.username,
        password_hash: password_hash,
        firstName: body.firstName,
        lastName: body.lastName
    });

    const userId = user._id
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

router.post("/signin", async (req, res) => {
    const body = req.body;
    const { success } = signinSchema.safeParse(body);

    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    // Find the user by username
    const user = await User.findOne({
        username: body.username
    });

    if (!user) {
        return res.status(411).json({
            message: "Invalid username or password"
        });
    }

    // Verify the password
    const isValidPassword = await user.validatePassword(body.password);
    if (!isValidPassword) {
        return res.status(411).json({
            message: "Invalid username or password"
        });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({
        token: token
    });
});


const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, req.body);

    res.json({
        message: "Updated successfully"
    })
})

router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await find({
        $or: [{
            firstName: {
                "$regex": filter,
                $options: "i"
            }
        }, {
            lastName: {
                "$regex": filter,
                $options: "i"
            }
        }]
    })

    res.json({
        users: users.map((user) => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user._id
        }))
    })
})

module.exports = router;