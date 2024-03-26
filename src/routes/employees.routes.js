import { Router } from 'express'

const router = Router()

//Aqui no existe app usamos router en su lugar
router.get('/employees', (req, res) => res.send('Buscando empleados'))
router.post('/employees', (req, res) => res.send('creando empleados'))
router.put('/employees', (req, res) => res.send('Actualizando empleados'))
router.delete('/employees', (req, res) => res.send('Eliminando empleados'))
export default router