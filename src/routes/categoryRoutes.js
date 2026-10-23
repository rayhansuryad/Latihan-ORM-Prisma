const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');
const { validationBodyCategories } = require('../middleware/validation');

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', validationBodyCategories, categoryController.createCategory);
router.put('/:id',  categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;