const express = require('express');

const cors = require('cors');

const app = express();
const movieRoutes = require('./routes/movieRoutes');
const categoryRoutes = require('./routes/categoryRoutes');


// Middlewares global
app.use(cors());
app.use(express.json()) // Untuk parse Json body

// prefix API
app.use('/api/movies', movieRoutes);
app.use('/api/categories', categoryRoutes);

//healt-cek
app.get('/', (req, res) => {
    res.send('API berjalan - silahkan gunakan /api/movies dan /api/movies');

})

const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=>{
        console.log(`Server berjalan pada port ${PORT}`);
    });