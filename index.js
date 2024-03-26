import express from "express"
import { pool } from './db.js'
const app = express()

app.listen(3000)

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "PONG" AS result')
    res.json(result[0])
});
app.get('/employees', (req, res) => res.send('Buscando empleados'))
app.post('/employees', (req, res) => res.send('creando empleados'))
app.put('/employees', (req, res) => res.send('Actualizando empleados'))
app.delete('/employees', (req, res) => res.send('Eliminando empleados'))
console.log('Server running on port 3000')


