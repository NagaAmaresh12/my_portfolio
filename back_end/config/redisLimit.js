const RedisStore = require('rate-limit-redis');
const Redis = require('redis');
// Redis client setup
const redisClient = Redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379
});
// Error handling for Redis connection issues
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});
// Rate limiter configuration
const limiter = rateLimit({
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args)
    }),
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
    message: 'Too many requests from this IP, please try again later.'
});