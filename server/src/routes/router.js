const router = require('express').Router();
const controller = require('../controller/controller');

router.get('/default/tools', controller.getDefaultTools);
router.post('/config', controller.saveConfig);

module.exports = router;