const express = require('express');
const router = express.Router();

router.get('/food-bank-requests', (req, res) => {
    const str = [{
        "name": "Codr Kai",
        "msg": "This is a msg",
        "username": "yespls"
    }];
    res.end(JSON.stringify(str));
});

router.post('/beneficiary-request', (req, res) => {
    res.end('NA');
});

module.exports = router;