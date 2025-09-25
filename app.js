const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const adminRoutes = require('./src/routes/adminRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');

const PORT = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname ,'./src/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))
app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


app.listen(PORT, () => console.log(`Servidor corriendo en
http://localhost:${PORT}`));




/*const express = require('express');
const app=express();
const mainRoutes=require('./src/routes/mainRoutes.js')
PORT=3000;
app.use(express.static('public'));
app.use('/',mainRoutes);
app.listen(PORT, ()=> console.log('Servidor corriendo en http://localhost:${PORT}'));*/