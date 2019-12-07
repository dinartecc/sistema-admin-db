import {Router} from 'express'

const router = Router();

import Ticket from '../../Models/Ticket/Ticket';
import RepuestoCliente from '../../Models/Ticket/RepuestoCliente';
import manejadorGenerico from '../../Controllers/manejadorGenerico'
import Nota from '../../Models/Ticket/Nota';

// Ruta generica para buscar tickets


router.get('/',         manejadorGenerico({modelo: Ticket,     accion: manejadorGenerico.LEER}))
router.get('/:id',      manejadorGenerico({modelo: Ticket,     accion: manejadorGenerico.LEER_POR_ID}))
router.post('/',        manejadorGenerico({modelo: Ticket,     accion: manejadorGenerico.CREAR}))
router.put('/:id',      manejadorGenerico({modelo: Ticket,     accion: manejadorGenerico.ACTUALIZAR_POR_ID}))
router.delete('/:id',   manejadorGenerico({modelo: Ticket,     accion: manejadorGenerico.ELIMINAR_POR_ID }))



router.get('/repuesto/',         manejadorGenerico({modelo: RepuestoCliente,     accion: manejadorGenerico.LEER}))
router.get('/repuesto/:id',      manejadorGenerico({modelo: RepuestoCliente,     accion: manejadorGenerico.LEER_POR_ID}))
router.post('/repuesto/',        manejadorGenerico({modelo: RepuestoCliente,     accion: manejadorGenerico.CREAR}))
router.put('/repuesto/:id',      manejadorGenerico({modelo: RepuestoCliente,     accion: manejadorGenerico.ACTUALIZAR_POR_ID}))
router.delete('/repuesto/:id',   manejadorGenerico({modelo: RepuestoCliente,     accion: manejadorGenerico.ELIMINAR_POR_ID }))

router.get('/:ticketId/repuestos', manejadorGenerico({modelo: RepuestoCliente,       accion: manejadorGenerico.LEER_PARAMETROS}))
router.post('/:ticketId/repuestos', manejadorGenerico({modelo: RepuestoCliente,     accion: manejadorGenerico.CREAR}))
router.delete('/:ticketId/respuestos', manejadorGenerico({modelo: RepuestoCliente,    accion: manejadorGenerico.ELIMINAR_POR_PARAMETROS}))

router.get('/notas/',         manejadorGenerico({modelo: Nota,     accion: manejadorGenerico.LEER}))
router.get('/notas/:id',      manejadorGenerico({modelo: Nota,     accion: manejadorGenerico.LEER_POR_ID}))
router.post('/notas/',        manejadorGenerico({modelo: Nota,     accion: manejadorGenerico.CREAR}))
router.put('/notas/:id',      manejadorGenerico({modelo: Nota,     accion: manejadorGenerico.ACTUALIZAR_POR_ID}))
router.delete('/notas/:id',   manejadorGenerico({modelo: Nota,     accion: manejadorGenerico.ELIMINAR_POR_ID }))

router.get('/:ticketId/notas', manejadorGenerico({modelo: RepuestoCliente,       accion: manejadorGenerico.LEER_PARAMETROS}))
router.post('/:ticketId/notas', manejadorGenerico({modelo: RepuestoCliente,     accion: manejadorGenerico.CREAR}))
router.delete('/:ticketId/notas', manejadorGenerico({modelo: RepuestoCliente,    accion: manejadorGenerico.ELIMINAR_POR_PARAMETROS}))




export default router