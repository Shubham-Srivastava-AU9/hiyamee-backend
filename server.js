const express = require('express');
const connectDB = require('./config/db');

// Connect DB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',(req,res)=>{
    res.send("hello from the hiyammee backend")
})

app.use('/api/user', require('./routes/user'));

app.use('/api/recruiter', require('./routes/recruiter'));

const PORT = process.env.PORT || 8900;

const server = app.listen(PORT, () => console.log(`Server running on ${PORT}`))


