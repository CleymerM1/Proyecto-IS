/*--------------------------------------IMPORTS----------------------------------*/
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

/*---------------------------------------CRUD------------------------------------*/
router.post('/registro', categoriaController.crearCategoria);
router.get('/', categoriaController.obtenerCategorias);
router.get('/:idC', categoriaController.obtenerCategoria);
router.put('/:idC', categoriaController.actualizarCategoria);
router.delete('/:idC', categoriaController.eliminarCategoria);
router.delete('/', categoriaController.eliminarCategorias);

/*-------------------------------------------------------------------------------*/
module.exports = router;