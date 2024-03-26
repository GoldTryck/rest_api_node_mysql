import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
}
export const getEmployee = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Employee not found'
    })

    res.json(rows)
}
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