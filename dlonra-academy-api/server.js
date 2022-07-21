const express = require('express');
const db = require('./app/models')
const cors = require('cors')
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors())

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and resync DB');
})

app.get('/', (req, res) => {
    res.json({message: 'Welcome to dlonra_academy API'})
})

require('./app/routes/tuser.routes')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})