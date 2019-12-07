import express from "express"
import database from './Database/database';
import {json} from 'body-parser'
import dotenv from 'dotenv'
import {join} from 'path'
import verificarLogin from './Middlewares/verificarLogin'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
const app = express();







// -------------------- Importando rutas --------------------

import RutaCliente from './Routes/Cliente'
import RutaAutenticacion from './Routes/Autenticacion'
import RutaUsuario from './Routes/Usuario/Usuario'
import RutaRol from './Routes/Usuario/Rol'
import RutaPermiso from './Routes/Usuario/Permiso'
import RutaRolPermiso from './Routes/Usuario/RolPermiso'
import RutaDatosDePrueba from './Routes/DatosDePrueba/Main'
import RutaCategoriaServicio from './Routes/Servicio/Categoria'
import RutaServicio from './Routes/Servicio/Servicio'
import RutaClasificacionVehiculo from './Routes/Vehiculo/ClasificacionAuto'
import RutaVehiculo from './Routes/Vehiculo/Vehiculo'
import RutaHerramienta from './Routes/Inventario/Herramienta'
import RutaCategoriaHerramienta from './Routes/Inventario/Categoria'
import RutaInsumo from './Routes/Inventario/Insumo'
import RutaTicket from './Routes/Ticket/Ticket'
import RutaTicketServicio from './Routes/Ticket/TicketServicio'
import RutaCotizacion from './Routes/Cotizacion/Cotizacion'
import RutaCotizacionServicio from './Routes/Cotizacion/CotizacionServicio'

// --------------------- Schemas ---------------------
import CreateSchemas from './Schemas/Schemas'
CreateSchemas()

// -------------------- Middlewares --------------------
app.use(cors())
app.use(cookieParser())
app.use(json())

app.use('*', (req, res, next) => {
    setTimeout(() => {
        next()
    }, 500)
})

// -------------------- Rutas --------------------
app.use('/api/clientes',        RutaCliente)
app.use('/api/auth',            RutaAutenticacion)
app.use('/api/usuarios',        RutaUsuario )
app.use('/api/roles',           RutaRol)
app.use('/api/permisos',        RutaPermiso)
app.use('/api/rolpermiso',      RutaRolPermiso)
app.use('/api/datosdeprueba',   RutaDatosDePrueba)
app.use('/api/servicios/categorias',    RutaCategoriaServicio)
app.use('/api/servicios/',              RutaServicio)
app.use('/api/vehiculos/',              RutaClasificacionVehiculo) // Dentro de esta ruta esta /marca /modelo /version
app.use('/api/vehiculos',               RutaVehiculo)
app.use('/api/herramienta',             RutaHerramienta)
app.use('/api/herramienta/categorias',  RutaCategoriaHerramienta)
app.use('/api/insumo',                  RutaInsumo)
app.use('/api/tickets/',                RutaTicket)
app.use('/api/ticketservicio/',         RutaTicketServicio)
app.use('/api/cotizacion',              RutaCotizacion)
app.use('/api/cotizacionservicio/',     RutaCotizacionServicio)

app.use(express.static(join(__dirname, '../public')))

app.use('*', (req, res) => {
    res.sendFile(join(__dirname, '../public/index.html'))
})



// Para eliminar y crear la base de datos
// database.sync({force: true})

// -------------------- Verificar DB --------------------
database.authenticate()
.then(() => console.log('Conectado a la base de datos'))
.catch(error => console.log(error))


export default app;


let inputs = [
    {
        name: 'nombre',
        titulo: 'Nombre del cliente',
        restriccion: {
            type: String,
            length: 10,
            required: true
        },
        foreign: {
            url: '/api/clientes',
            displayProp: 'Nombre',
            nameProp: 'id'
        }
    },
    {
        name: 'Edad',
        titulo: 'Edad del cliente',
        restriccion: {
            type: Number,
            length: 2,
            required: false
        }
    },
]