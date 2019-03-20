import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/conManRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/conManDB", {
    useNewUrlParser: true
});

// bodyparser set up
app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(bodyParser.json());

routes(app);

// configure static image files
app.use(express.static('public/images'));

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port: ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port: ${PORT}`)
);