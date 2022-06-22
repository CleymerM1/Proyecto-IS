
const express = require('express');
const conexion = require('../config/conexion');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuario);



module.exports = router;