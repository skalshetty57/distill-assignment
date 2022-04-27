const express = require ('express');
const cors = require ('cors');

const app = express();

const myCors = {
    origin: "http://localhost:3000"
}

const path = __dirname+ '/build';
app.use(express.static(path));




app.use(cors(myCors));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path+'/index.html');
});
// app.get('/',(req,res)=>{
//     res.status(200).send({message:"Distill application"});
// })

require('./routes/routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

