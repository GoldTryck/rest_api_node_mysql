import { Router } from 'express'
import {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees
} from '../controllers/employees.controller.js'

const router = Router()

//Aqui no existe app usamos router en su lugar
router.get('/employees', getEmployees)
router.post('/employees', createEmployees)
router.put('/employees', updateEmployees)
router.delete('/employees', deleteEmployees)
export default router