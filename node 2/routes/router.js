const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/controller');



router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

 router.get( '/get',product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

router.delete('delete', product_controller.product_delete_all);

module.exports = router;