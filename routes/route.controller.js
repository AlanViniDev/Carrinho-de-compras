// Constantes e rotas e requisições
const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express.Router();
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// requisição do controller
const view_controller =  require("../control/view.controller.js");

//rota
router.get('/index', view_controller.view);

module.exports = router;  