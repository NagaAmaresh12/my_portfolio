// middleware/ipWhitelist.js
const ipWhitelist = ['127.0.0.1']; // Example IPs, add your admin IPs here

function ipWhitelistMiddleware(req, res, next) {
    const clientIp = req.ip;
    if (ipWhitelist.includes(clientIp)) {
        return next(); // Allow access if IP is in the whitelist
    }
    res.status(403).send('Access Denied');
}

module.exports = ipWhitelistMiddleware;
// apply the middleware to admin routes