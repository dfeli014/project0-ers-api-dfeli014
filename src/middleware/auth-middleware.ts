export function authMiddleware() {
    return (req, res, next) => {
        const user = req.session.user;
        if (!user) {
            res.sendStatus(400).send('Invalid Creds');
        } else {
            next();
        }
    };
}