const jwt = require("jasonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {

    const authHeaders = res.headers.authorization;

    if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
        res.status(403).json({});
    }

    const token = authorization.split(' ')[1];
    try {
        const { success } = jwt.verify(token, JWT_SECRET);
        if (!success) {
            res.sendStatus(403);
        }
        else {
            req.userId = decoded.userId;
            next();
        }
    }
    catch (err) {
        res.sendStatus(403).json({})
    }
}
module.exports = {
    authMiddleware
};