const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
// const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion } = require('mongodb')
// const jwt = require('jsonwebtoken')

const port = process.env.PORT || 5000

// middleware
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kowhoxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    //styleHouse
    //products

    const productCollection = client.db('styleHouse').collection('products')


    //get all data

    // app.get('/products', async(req, res)=>{
    //   const rusult = await productCollection.find().toArray()
    //   res.send(rusult)
    // })


    app.get('/products', async (req, res) => {
      try {
          const { page = 1, limit = 10 } = req.query;  // Default to page 1 and 10 items per page
          const skip = (parseInt(page) - 1) * parseInt(limit);

          const products = await productCollection.find().skip(skip).limit(parseInt(limit)).toArray();
          const totalProducts = await productCollection.countDocuments();  // Total number of products
          const totalPages = Math.ceil(totalProducts / limit);  // Total number of pages

          res.status(200).json({
              products,
              currentPage: parseInt(page),
              totalPages,
              totalProducts,
          });
      } catch (error) {
          console.error('Error fetching products:', error);
          res.status(500).send({ message: 'Failed to fetch products' });
      }
  });


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Hello from style house Server..')
  })
  
  app.listen(port, () => {
    console.log(`style house is running on port ${port}`)
  })
  