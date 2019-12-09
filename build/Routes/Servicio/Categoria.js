"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const Categoria_1 = __importDefault(require("../../Models/Servicio/Categoria"));
const manejadorGenerico_1 = __importDefault(require("../../Controllers/manejadorGenerico"));
// Ruta generica para buscar roles
router.get('/', manejadorGenerico_1.default({ modelo: Categoria_1.default, accion: manejadorGenerico_1.default.LEER }));
router.get('/:id', manejadorGenerico_1.default({ modelo: Categoria_1.default, accion: manejadorGenerico_1.default.LEER_POR_ID }));
router.post('/', manejadorGenerico_1.default({ modelo: Categoria_1.default, accion: manejadorGenerico_1.default.CREAR }));
router.put('/:id', manejadorGenerico_1.default({ modelo: Categoria_1.default, accion: manejadorGenerico_1.default.ACTUALIZAR_POR_ID }));
router.delete('/:id', manejadorGenerico_1.default({ modelo: Categoria_1.default, accion: manejadorGenerico_1.default.ELIMINAR_POR_ID }));
exports.default = router;
//# sourceMappingURL=Categoria.js.map