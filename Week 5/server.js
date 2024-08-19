let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const petRoutes = require('./routes/petRoutes');
require('dotenv').config();

const uri = "mongodb+srv://s223987441:Africa%40123@cluster0.daepg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public_html'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', petRoutes);

async function dbConnection() {
    try {
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();
        app.locals.collection = client.db('PetsDetails').collection('Pets');
        console.log("Connected to database");
    } catch (ex) {
        console.error(ex);
    }
}

app.listen(port, () => {
    console.log(`Express server started on port ${port}`);
    dbConnection();
});
