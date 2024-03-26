import { pool } from "../db.js"

export const getEmployees = (req, res) => res.send('Buscando empleados')

export const createEmployees = async (req, res) => {
    const { name, salary } = req.body
    const [row] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
        id: row.insertId,
        name,
        salary
    })
}

export const updateEmployees = (req, res) => res.send('Actualizando empleados')

export const deleteEmployees = (req, res) => res.send('Eliminando empleados')