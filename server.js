const express = require('express');
const db = require('./app/models')

const app = express();

app.use(express.json());

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and resync DB');
})

app.get('/', (req, res) => {
    res.json({message: 'Welcome to dlonra_academy API'})
})

require('./app/routes/tuser.routes')(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})