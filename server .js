const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const passwordRoutes = require('./routes/password');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialisation de l'application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Remplacez par votre URL front-end
    credentials: true
}));

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log('MongoDB connection error:', err);
});

// Routes
app.use('/routes/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/routes/password', passwordRoutes);

// Route par défaut
app.get('/', (req, res) => {
    res.send('Welcome to the e-commerce API');
});

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});