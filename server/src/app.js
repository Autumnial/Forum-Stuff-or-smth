const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require("body-parser")

const {sequelize} = require('./models')

const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

require('./routes.js')(app)


sequelize.sync({force: false}).then(() => {
    app.listen(8081, () => {
        console.log('Server started! listening to port: 8081')
    })
}
)