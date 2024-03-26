import { Router } from 'express'
import {
    getEmployees,
    getEmployee,
    createEmployees,
    updateEmployees,
    deleteEmployees
} from '../controllers/employees.controller.js'

const router = Router()

//Aqui no existe app usamos router en su lugar
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees', createEmployees)
router.put('/employees', updateEmployees)
router.delete('/employees', deleteEmployees)
export default router