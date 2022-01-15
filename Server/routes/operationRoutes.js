const router = require('express').Router();
const opsController = require('../controllers/Operations');

router.post('/operations/createItem', opsController.createItem);
// router.get('/operations/getallitems', opsController.getAllItems);
// router.delete('/operations/deleteItem',opsController.deleteItem);
// router.put('/operations/updateItem', opsController.updateItem);

module.exports = router;

