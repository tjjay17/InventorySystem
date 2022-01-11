const router = require('express').Router();
const opsController = require('./controllers/Operations');

router.post('/operations/createItem', opsController.create);
router.get('/operations/getallitems', opsController.getAllItems);
router.delete('/operations/deleteItem',opsController.delete);
router.put('/operations/updateItem', opsController.update);

module.exports = router;

