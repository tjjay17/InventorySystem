const router = require('express').Router();
const opsController = require('./controllers/Operations');

router.post('/api/operations/createItem', opsController.create);
router.get('/api/operations/getallitems', opsController.getAllItems);
router.delete('/api/operations/deleteItem',opsController.delete);
router.put('/api/operations/updateItem', opsController.update);

module.exports = router;

