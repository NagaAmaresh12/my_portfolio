const express = require('express');
const router = express.Router();
const sitemapHandler = require('../controllers/sitemapHandler');

// Route to serve sitemap.html
router.get('/sitemap', sitemapHandler);

module.exports = router;