/*--------------------------------------IMPORTS----------------------------------*/
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/*---------------------------------------CRUD------------------------------------*/
router.post('/registro', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProductos);

/*-------------------------------------------------------------------------------*/
module.exports = router;