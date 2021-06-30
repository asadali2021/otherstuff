const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose")

// routes
const authRoutes = require('./routes/auth');
const adminAuthRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

// environment variable or you can say constants
env.config(); 




//Mongodb connection linkconst authRoutes = require('./routes/auth');
//mongodb+srv://admin:<password>@cluster0.av10l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.av10l.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
     {
         useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex : true
        }
)
.then(()=>{
            console.log("Database Connected");
        });

//environment variable or you can say constants
//middleware app.use(data will be decrypted in this form) from express server
// app.use(express.json())

//middleware app.use(data will be decrypted in this form) from body parser
app.use(express.json());


app.use('/api', authRoutes);
app.use('/api', adminAuthRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})