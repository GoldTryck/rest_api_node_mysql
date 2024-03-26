import express from "express"
import employyesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(indexRoutes)
app.use(employyesRoutes)

app.listen(3000)
console.log('Server running on port 3000')



