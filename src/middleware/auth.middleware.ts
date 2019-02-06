export function managerMiddleware(req, res, next) {
    const user = req.session.user;
    const id = Number.parseInt(req.params.id);

    if (user && (user.role === 1 || user.role === 2) || user.userId === id) {
        next();
    } else {
        res.status(401).json('The incoming token has expired');
    }
}

export function adminOnlyMiddleware(req, res, next) {
    const user = req.session.user;
    if (user && user.role === 1) {
        next();
    } else {
        res.status(401).json('The incoming token has expired');
    }
}

export function userIdMiddleware(req, res, next) {
    const user = req.session.user;
    const uid = +req.params.userId;

    if (user && (user.userId === uid) || user.role === 1 || user.role === 2) {
        next();
    } else {
        res.status(401).json('The incoming token has expired');
    }
}