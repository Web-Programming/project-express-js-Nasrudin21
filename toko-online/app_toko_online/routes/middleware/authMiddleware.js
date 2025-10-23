exports.adminOnly = (req, res, next) => {
    const isAdmin = req.body.isAdmin; // Misalnya, dapatkan informasi admin dari body request
    if (isAdmin === true) {
        console.log('Middleware : Akses admin Diberikan');
        next();
    } else {
        return res.status(403).json({
            success : false,
            message: 'Akses ditolak. Endpoint ini membuthkan hak admin'
        });
    }
};