import express from "express"
import employyesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()


app.use(express.json())

app.use(indexRoutes)
app.use('/api/', employyesRoutes)

app.use((req, res) => { // Toda solicitud que no coincid con las rutas definidas antes responderan:
    res.status(404).json({
        message: 'End point not found'
    })
})

app.listen(3000)
console.log('Server running on port 3000')



