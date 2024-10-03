const express = require('express');
const router = express.Router();
const dbModule = require('../DB/db_api');

// DB 모듈 라우팅
router.get('/', (req, res) => {
    dbModule.runDbFunction();
    res.send('DB module executed');
});

module.exports = router;
