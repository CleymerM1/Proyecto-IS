
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

/*------------------------------CRUD------------------------------*/
router.post('/registro', usuarioController.crearUsuario);
router.post('/:idU/:idC', usuarioController.suscribirCategoria);
router.get('/', usuarioController.obtenerUsuario);
router.delete('/:idU/:idC', usuarioController.desuscribirCategoria)
/*----------------------------------------------------------------*/



module.exports = router;
